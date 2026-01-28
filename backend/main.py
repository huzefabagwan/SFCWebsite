from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import os

# Database setup
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./banana_storage.db")
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Contact model
class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, index=True)
    message = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)

# Create tables
Base.metadata.create_all(bind=engine)

# Pydantic models
class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    message: str
    created_at: datetime

# FastAPI app
app = FastAPI(title="Banana Cold Storage API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:3002",
        "http://127.0.0.1:3002",
        "http://localhost:5500",
    ],  # Add your frontend URL(s)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact(request: ContactRequest):
    """Submit a contact message"""
    db = SessionLocal()
    try:
        # Create new contact message
        contact = ContactMessage(
            name=request.name,
            email=request.email,
            message=request.message
        )
        db.add(contact)
        db.commit()
        db.refresh(contact)

        return ContactResponse(
            id=contact.id,
            name=contact.name,
            email=contact.email,
            message=contact.message,
            created_at=contact.created_at
        )
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Error saving message: {str(e)}")
    finally:
        db.close()

@app.get("/api/contact")
async def get_contacts():
    """Get all contact messages (for admin purposes)"""
    db = SessionLocal()
    try:
        contacts = db.query(ContactMessage).all()
        return [
            ContactResponse(
                id=c.id,
                name=c.name,
                email=c.email,
                message=c.message,
                created_at=c.created_at
            ) for c in contacts
        ]
    finally:
        db.close()

@app.get("/")
async def root():
    return {"message": "Banana Cold Storage API", "status": "running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)