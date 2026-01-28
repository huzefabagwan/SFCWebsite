// script loads images from /meme folder and wires contact form to backend
const galleryGrid = document.getElementById('galleryGrid')

// Image filenames expected in public/meme — only use those files
const imageFiles = [
  'image11.jpg',
  'image12.jpeg',
  'image13.jpeg',
  'image14.jpeg',
  'image15.jpeg',
  'image16.png',
]

function renderGallery(){
  galleryGrid.innerHTML = ''
  imageFiles.forEach(name => {
    const img = document.createElement('img')
    img.src = `/meme/${name}`
    img.alt = name
    img.onload = () => {}
    img.onerror = () => { img.style.opacity = '0.4'; img.title = 'Missing or invalid image' }
    galleryGrid.appendChild(img)
  })
}

renderGallery()

// Contact form
const form = document.getElementById('contactForm')
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const data = new FormData(form)
  const body = {
    name: data.get('name'),
    email: data.get('email'),
    message: data.get('message')
  }

  try{
    const res = await fetch('http://localhost:8002/api/contact', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    })
    if(res.ok){
      alert('Thank you — message sent')
      form.reset()
    } else {
      alert('Failed to send message')
    }
  }catch(err){
    alert('Error sending message')
    console.error(err)
  }
})