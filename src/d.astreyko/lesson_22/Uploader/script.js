
const fileUploader = document.querySelector('#fileUploader');
let files = [];
function chooseFile() {
  fileUploader.click()
}

function onInputChange() {
  let file = fileUploader.files[0];
  const fileList = document.querySelector('.file-list')
  files.push(file);
  file.id = Date.now();
  const fileElement = document.createElement('div');
  fileElement.innerHTML = `<div class="file-item" id="file_${file.id}">
                        <div class="file-icon">
                            <span class="material-symbols-outlined">
                                ${getFileTypeIcon(file)}
                            </span>
                        </div>
                        <div class="item-content flex-grow">
                            <div class="item-data item-info">
                                <span class="file-name">${file.name}</span>
                                <span class="file-size">${getFileSize(file)}</span>
                                <div class="flex-grow"></div>
                                <span class="material-symbols-outlined delete-button" 
                                onclick="removeItem(${file.id})">
                                    close
                                </span>
                            </div>
                            <div class="item-data status-bar">
                                <div class="full"></div>
                                <div class="uploaded"></div>
                                
                            </div>
                            <div class="item-data status-percent">0% done</div>
                        </div>
                    </div>`;
  fileList.append(fileElement)
  uploadFile(file, (uploadedDataSize) =>{
    const statusPercent = fileElement.querySelector('.status-percent')
    console.log(uploadedDataSize);
    const statusBar = fileElement.querySelector('.status-bar .uploaded')
    const percent = Math.floor(uploadedDataSize / file.size * 100)
    statusBar.style.width = `${percent}%`
    if (uploadedDataSize === file.size) {
      statusPercent.textContent = 'Completed'
    }
    else {
      statusPercent.textContent = percent + '% done';
    }



  })
  console.log(file);
}

function getFileSize(file) {
  return (file.size / 1000).toFixed(2) + ' kb'
}

function getFileTypeIcon(file) {
  return file.type.startsWith('image') ? 'image' : 'description'
}

function removeItem(fileId) {
  const fileElement = document.querySelector(`#file_${fileId}`);
  fileElement.remove();
}

function uploadFile(file, statusCallback) {
  let fileSize = file.size;

  const id= setInterval(() => {
    if (fileSize > 0) {
      fileSize -= 100000;
      statusCallback(Math.min(file.size - fileSize, file.size));
    }
    else {
      clearInterval(id)
    }
  }, 1000);
}
