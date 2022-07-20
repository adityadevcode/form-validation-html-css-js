// form motham vasthundi
//id dwara tisukoni ravali endukante unique ga vuntundi
const form = document.getElementById("form")
//username enduku ante epudaithe user ikada sumbit chesthado like user email password confirm password
const uname = document.getElementById("uname")
// console.dir(uname) dintlo value ane attribute vuntundi ! eedi enti ante manamu em value enter chesthamo chupisthundi ! continaution of validate()
const email = document.getElementById("email")

const password = document.getElementById("password")
// confirm password
const cpassword = document.getElementById("cpassword")
// terms and conditions
const tandc= document.getElementById("tc")

//user submit button click chesinapude manam check cheyali
//form submit click chesinapudu validation cheyali ani ankuntuna
//1st line form e event listner cheyali
// action ni oka fucntion arrow function form ro rayali
// event information 
//ikada e fucntion ayina use cheyachu normal or anonymous but arrow fucntiin is good
// argument parenthesis lo petuthuna e, okate argument ni brackets lo petakuna em kadu e instead (e)

// user ne redirect chesetaniki login successful home page access

var isValidName = false;
var isValidEmail = false;
var isValidPassword = false;
var isValidCPassword = false;
var isTCChecked = false


uname.addEventListener('keyup',checkUserName)



form.addEventListener('submit',(e)=>{
// event chese pani enti ante okavela form submit chesthe, sumbit button click chesthe form lo edithe  action attribute lo  isthamo adi jaragali ante action jaragali ikada redirect avali ante index.html
// redirect jaraga kunta apali ante diniki prevent default ane method ivali 
// form ventane sumbit avakunda apachu !manamu ivaku pothe direct ga thank you for submitting form ani vere page velipothundi
    e.preventDefault()
    // validate function call chesthuna e form lo prathi field user edi ayithe sumbit kodutharo user apudu e form lo prathi oka field tisukoni vasthunam username enter chesinapud email password confirm password 
    validate()
})



function validate(){
    // .value ante user enter chesina value ikada vasthundi
    //oka vela user spaces ichi sumbit chesthe validate avakudadu anduku kosam trim chethundi user ichana values ni blank space tisesi ikada store chesthundi
    // submit button click chesinapudu
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()
   

    //User enter chesina value empty ayithe inkoka function

    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }
    // username less than 3 characters isthe
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 characters')
    }
    else{        
        setSuccesss(uname)
    }
    //email check chesthundi empty vunte setError function call chesthundi
    if(emailValue===''){
        setError(email,'Eamil cannot be empty')
    }  
    // user enter chesina value check chesthunam
    else if(!emailCheck(emailValue)){
        setError(email,'Enter Valid Email Id')
    }
    else{        
        setSuccesss(email)
    }

    
    //Password check

    if(passwordValue===''){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'user name should be minimum 8 characters')
    }
    else{        
        setSuccesss(password)
    }

      
    //Confirm Password check

    if(cpasswordValue===''){
        setError(cpassword,'password cannot be empty')
    }
    else if(cpasswordValue !==passwordValue){
        setError(cpassword,'passwords not matched')
    }
    else{        
        setSuccesss(cpassword)
    }

     //Terms and conditions check

     if(!tandc.checked){
         
        setError(tc,'click on agree terms checkbox')        
    }
    else{
        setSuccesss(tc)
    }
    
    // seterror ki 2 arguments pass chesam, input username edi firs ishte adi password
    // username set chesthe dani related vasthadi email ayithe email related
   //input edi isthe e input variable lo vuntundi
//    message edi ishte ha input varible lo vuntundi
    function setError(input,message){
        // parent element motham vasthadi
        let parent = input.parentElement;
        //username lo small anedani testhunam small vachi tag error
        let small = parent.querySelector('small')
        // pyna vuna message argumrnt lo message display cheyali
        small.innerText = message
        //error and success chupistham css lo define chesina colors
        // success vachinapudu error class tiseyali, error vachinapudu success class tiseyali
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccesss(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }

    // regular expressions user enter chesina value particular format lo vundo ledo check chesthundi

    function emailCheck(input){
        // user enter chesina email correct format lo vundo ledo check chestham
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        // regular expression lo js test ane method vuntundi adi em chesthundi ante manamu daniki ok input pass chesthe (value pass chesthe) pyna pattern lo vundo ledo cheputhundi /[a-z0] oka vella pyna pattern lo vunte true lekapothe false ani return chesthundi
        // user edi ayithe input isthadu dani manamu check chestham
        let valid = emailReg.test(input) 
            //   user true value enter chesthe
        return valid
        // false cheste
    }
}

