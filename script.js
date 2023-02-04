const chooseFileLabel = document.querySelector(`label[for='file-upload']`)
const imageInputEl = document.querySelector('.file-upload')
const dropArea = document.querySelector('.drop-area')
const imageUploader = document.querySelector('#imageUploader')
const loadingScreen = document.querySelector('#progressContainer')
const uploadSuccessPage = document.querySelector('#uploadSuccessPage')
const imageContainer = document.querySelector('.img-wrapper')
const imageLink = document.querySelector('#imageLink')
const copyBtn = document.querySelector('#copy-btn')

let IMAGE_URL = ''

chooseFileLabel.addEventListener('keyup', e => {
    if(e.which !== 32 && e.which !== 13) return

    e.preventDefault();
    imageInputEl.click();
})

imageInputEl.onchange =  e => uploadImage(e.target.files[0])
dropArea.ondragover = e => {
    e.preventDefault()

    dropArea.classList.add('dragover-shadow')
}

dropArea.ondragleave = e => {
    e.preventDefault()
    dropArea.classList.remove('dragover-shadow')
}

dropArea.addEventListener('drop', e => {
    e.preventDefault()
    dropArea.classList.remove('dragover-shadow')
    
    if(!e.dataTransfer.files[0]) return
    uploadImage(e.dataTransfer.files[0])
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(IMAGE_URL)
    copyBtn.textContent = 'Copied!'
    setTimeout(() => copyBtn.textContent = 'Copy Link', 3000)
})

function uploadImage(imageObject) {
    imageUploader.classList.add('display-none')
    loadingScreen.classList.remove('display-none')

    IMAGE_URL = URL.createObjectURL(imageObject)

    const uploadedImage = new Image()

    uploadedImage.src = IMAGE_URL
    uploadedImage.alt = 'uploaded image'
    imageLink.textContent = IMAGE_URL

    imageContainer.appendChild(uploadedImage)

    setTimeout(() => {
        loadingScreen.classList.add('display-none')
        uploadSuccessPage.classList.remove('display-none')
    }, 3000)
}

