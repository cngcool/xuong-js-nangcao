
let user= localStorage.getItem('user')
// console.log('thong tin user',user);
const body =document.querySelector('body')
if(user){
  user = JSON.parse(user)
  console.log(user.user)
  if(user.user.role!=='admin'){
      body.innerHTML='ban ko cos quyen truy cap'
  }
}else{
  body.innerHTML='ban ko cos quyen truy cap'
}