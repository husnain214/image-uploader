const chooseFileLabel = document.querySelector(`label[for='file-upload']`)
const uploadButton = document.querySelector(".file-upload")
const dropArea = document.querySelector(".drop-area")

chooseFileLabel.addEventListener("keyup", e => {
    if(e.which !== 32 && e.which !== 13) return

    e.preventDefault();
    uploadButton.click();
})

dropArea.addEventListener('dragover', e => e.preventDefault())

dropArea.addEventListener('drop', e => {
    e.preventDefault()

    console.log(e.dataTransfer.files[0])
})