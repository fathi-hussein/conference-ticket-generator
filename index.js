const avatarInput = document.getElementById('avatar');
const nameInput= document.getElementById('name')
const emailInput= document.getElementById('email')
const username= document.getElementById('username')
const submit = document.getElementById('submit')
const upload = document.getElementById('upload');
const fullname = document.getElementById('fullname');
const github = document.getElementById('github');
const emailError = document.getElementById('email-error')
const avatarError = document.getElementById('avatar-error')
const uploadtext = document.querySelector('.info');
const form = document.querySelector('.form-container');
const card = document.querySelector('.success-container');
const email = document.querySelector('.email')
const icon = document.getElementById('icon')



let imgUrl;


avatarInput.addEventListener('change',(e)=>{
  const file = e.target.files[0];
  
  
  if (file.size >500 *1024){
    avatarError.textContent = "File too large. Please upload a photo under 500KB."
    avatarError.classList.remove('hide'); // Make the error visible!
    uploadtext.classList.add('hide');   // Hide the normal info text
    avatarInput.value = '';             // Clear the invalid file from the input
    upload.src = '';
  }else{
    avatarError.classList.add('hide');
    uploadtext.classList.remove('hide');
    imgUrl = URL.createObjectURL(file);
    upload.src = imgUrl
    icon.src = imgUrl
  }
})

submit.addEventListener('click',(e)=>{
  e.preventDefault()

  if (!avatarInput.files[0] && emailInput.value.trim() === ''){
    emailInput.classList.add('error-input')
    emailError.classList.remove('hide')
    uploadtext.classList.add('hide')
    avatarError.classList.remove('hide')
    avatarError.textContent += 'Please upload a photo';
  }else if (!avatarInput.files[0]){
    uploadtext.classList.add('hide')
    avatarError.classList.remove('hide')
  }else if (emailInput.value.trim() === ''){
    emailInput.classList.add('error-input')
    emailError.classList.remove('hide')
  }
  else{
    upload.src = imgUrl;
    fullname.textContent = nameInput.value;
    github.textContent = username.value
    email.textContent = emailInput.value
    
    form.classList.add('hide')
    card.classList.remove('hide')

  }


})


