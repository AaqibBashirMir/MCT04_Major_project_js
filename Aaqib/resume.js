
// template type changer all js here
let resumeType = document.querySelector("#type");
let resField = document.querySelector("#resume-field");
let resHeaderCont = document.querySelector("#res-header-cont").style.display = "none"
resumeType.addEventListener("input", (e) => {
    let resHeader = document.querySelector("#res-header").style.backgroundColor = "#1c305c"

    if (resumeType.value == "Two-Column") {
        let inputFile=document.querySelector("#file").style.display="block"
        var image = document.getElementById('output').style.display = "block"
        resField.style.display = "block"
        let resumeBdyLeft = document.querySelector("#res-bdy-left").style.display = "block";
        let resHeader = document.querySelector("#res-header").style.backgroundColor = "bluelight"
        let resHeaderCont = document.querySelector("#res-header-cont").style.display = "none"
    }
    else if (resumeType.value == "Minimalist") {
        console.log(1);
        let resWidth = document.querySelector("#res-bdy-right").style.width = "650px"
        let inputFile=document.querySelector("#file").style.display="none"
        var image = document.getElementById('output').style.display = "none"
        resField.style.display = "block"
        let resumeBdyLeft = document.querySelector("#res-bdy-left").style.display = "none";
        let resHeader = document.querySelector("#res-header").style.backgroundColor = "lightgray"
        let resHeaderCont = document.querySelector("#res-header-cont").style.display = "block"
    }
    // else {
    //     resField.style.display = "none"
    // }
})



// bg-color chnger
let hedBgColor = document.querySelector("#bg-color");
hedBgColor.addEventListener("input", (e) => {
    let resHeader = document.querySelector("#res-header").style.backgroundColor = hedBgColor.value;
})
// textcolorChanger
let textColorchnger = document.querySelector("#text-col");
textColorchnger.addEventListener("input", (e) => {
    let resHeaderContact = document.querySelector("#res-header-cont").style.color = textColorchnger.value
    let resName = document.querySelector("#res-name").style.color = textColorchnger.value;
    let resJobTitle = document.querySelector("#res-job-title").style.color = textColorchnger.value;
})

// user input his/her own image upload js code here 
function loadFile(event){
    let image=document.querySelector("#output");
    image.src=URL.createObjectURL(event.target.files[0])
}

// signature js code
var signature=document.querySelector("#signature-pad");
var signaturePad=new SignaturePad(signature,{
    backgroundColor:"lightblue"});

    let clearButon=document.querySelector("#clear-btn").addEventListener("click",()=>{
        signaturePad.clear();
    })



// fetching data to resume field
// name fetching
let inputName = document.querySelector("#name");
inputName.addEventListener("input", (e) => {
    let resumeName = document.querySelector("#res-name").textContent = inputName.value;
})

// job title fetching
let inputJobTitl = document.querySelector("#job-title");
inputJobTitl.addEventListener("input", (e) => {
    let resumeJobTitle = document.querySelector("#res-job-title").textContent = inputJobTitl.value
})

// mail fetching
let inputMail = document.querySelector("#email");
inputMail.addEventListener("input", (e) => {
    console.log("mail");
    let resFieldMail = document.querySelector("#res-cont-mail").textContent = inputMail.value;
    let headerContMail = document.querySelector("#header-cont-mail").textContent = inputMail.value
})

// locatiom fetching
let inputLocatn = document.querySelector("#city");
inputLocatn.addEventListener("input", (e) => {
    let resLocation = document.querySelector("#res-cont-location").textContent = inputLocatn.value;
    let headerContLOc = document.querySelector("#header-cont-location").textContent = inputLocatn.value
})
// contact fetching
let inputNumber = document.querySelector("#num");
inputNumber.addEventListener("input", (e) => {
    let resumeHeaderNum = document.querySelector("#header-cont-phone").textContent = inputNumber.value;
    let resumebodyNum = document.querySelector("#res-cont-phone").textContent = inputNumber.value;
})

// summary fetch
let inputDEscription = document.querySelector("#job-desc");
let resRightSidedContainer = document.querySelector("#res-bdy-ryt-contain");
function summaryAppend() {
    console.log("sum");
    resRightSidedContainer.textContent = inputDEscription.value;
}
inputDEscription.addEventListener("input", summaryAppend)

// skill fetch
let inputSkill = document.querySelector("#job-skill");
inputSkill.addEventListener("input", (e) => {
    let fetchedSkill=document.querySelector("#skills").textContent=inputSkill.value;
})




// applying click here on input employement button detail inorder to display inner html of employement section and fetch that data in my resume that i have to create
let employeBtn = document.querySelector("#add-employe");
employeBtn.addEventListener("click", (e) => {
    //  dispalying here employement inner whole html
    let innerEmployContainer = document.querySelector("#inner-empl-parent").style.display = "block"

    // fetching here start date of experience/employement part
    let inputEmplStartDate = document.querySelector("#emp-start-date");
    inputEmplStartDate.addEventListener("input", () => {
        console.log(1111);
        let fetchedStartDate = document.querySelector("#start-date-exp").
            textContent = inputEmplStartDate.value;
    })

    // fetching here end date of experience/employement part
    let inputEmplEndDate = document.querySelector("#emp-end-date");
    inputEmplEndDate.addEventListener("input", () => {
        let fetchedExpEndDate = document.querySelector("#end-date-exp").textContent = inputEmplEndDate.value;
    })

    // fetching here employement/experience job title to my resume
    let inputEmplJobTitl = document.querySelector("#emp-title");
    inputEmplJobTitl.addEventListener("input", () => {
        let fetchedJobTitle = document.querySelector("#fetched-job-title").textContent = inputEmplJobTitl.value
    })

    // fetching here employer/experience itself to res
    let inputEmployer = document.querySelector("#employer");
    inputEmployer.addEventListener("input", () => {
        let fetchedEmployer = document.querySelector("#employer-fetched").textContent = inputEmployer.value
    })

    // fetching here employement/experinece description to my resume.
    let inputEmplDesc = document.querySelector("#emp-desc");
    inputEmplDesc.addEventListener("input", () => {
        let fetchedEmployementDesc = document.querySelector("#employer-desc").textContent = inputEmplDesc.value
    })

})


// applying click here on input project button  inorder to display inner html of project section and fetch that data in my resume that i have to create!
let projectBtn = document.querySelector("#project-btn");
projectBtn.addEventListener("click", (e) => {
    //  dispalying here employement inner whole html
    let innerEmployContainer = document.querySelector("#inner-proj-parent").style.display = "block"

    // fetching here start date of project part
    let inputProjStartDate = document.querySelector("#proj-start-date");
    inputProjStartDate.addEventListener("input", () => {
        console.log(1111);
        let fetchedProjStartDate = document.querySelector("#start-date-proj").
            textContent = inputProjStartDate.value;
    })

    // fetching here end date of proj part
    let inputProjEndDate = document.querySelector("#proj-end-date");
    inputProjEndDate.addEventListener("input", () => {
        let fetchedProjEndDate = document.querySelector("#end-date-proj").textContent = inputProjEndDate.value;
    })

    // fetching here proj title to my resume
    let inputProjTitl = document.querySelector("#proj-title");
    inputProjTitl.addEventListener("input", () => {
        let fetchedProjTitl = document.querySelector("#fetched-proj-title").textContent = inputProjTitl.value
    })

    // fetching here employement/experinece description to my resume.
    let inputProjDesc = document.querySelector("#proj-desc");
    inputProjDesc.addEventListener("input", () => {
        let fetchedProjDesc = document.querySelector("#res-proj-desc").textContent = inputProjDesc.value
    })

})



// applying click here on input Education button  inorder to display inner html of Education section and fetch that data in my resume that i have to create!
let educationBtn = document.querySelector("#edu-btn");
educationBtn.addEventListener("click", (e) => {
    //  dispalying here Education inner whole html
    let innerProjContainer = document.querySelector("#inner-edu-parent").style.display = "block"

    // fetching here start date of Education part
    let inputEduStartDate = document.querySelector("#edu-start-date");
    inputEduStartDate.addEventListener("input", () => {
        console.log(1111);
        let fetchedEduStartDate = document.querySelector("#start-date-edu").
            textContent = inputEduStartDate.value;
    })

    // fetching here end date of Education part
    let inputEduEndDate = document.querySelector("#edu-end-date");
    inputEduEndDate.addEventListener("input", () => {
        let fetchedEduEndDate = document.querySelector("#end-date-edu").textContent = inputEduEndDate.value;
    })

    // fetching here education Qualification to my resume
    let inputEduQualif = document.querySelector("#edu-qualif");
    inputEduQualif.addEventListener("input", () => {
        let fetchedEduQualif = document.querySelector("#fetched-qualif-title").textContent = inputEduQualif.value
    })

        // fetching here  University/School to resume
        let inputEduCollege = document.querySelector("#edu-sch-colleg");
        inputEduCollege.addEventListener("input", () => {
            console.log("111111111");
            let fetchedCollege = document.querySelector("#colleg-fetched").textContent = inputEduCollege.value
        })

    // fetching here Education description to my resume.
    let inputEduDesc = document.querySelector("#edu-desc");
    inputEduDesc.addEventListener("input", () => {
        let fetchedEduDesc = document.querySelector("#fetched-edu-desc").textContent = inputEduDesc.value
    })

})


// button functionality for the resume downloading code js
let downloadBtn = document.querySelector("#download-btn");
downloadBtn.addEventListener("click", (e) => {
    console.log("download");
    let inputFile=document.querySelector("#file").style.display="none"
    let clearButton=document.querySelector("#clear-btn").style.display="none";
    let bodyupper = document.querySelector("#body").style.display = "none";
    let navbar = document.querySelector("#navbar").style.display = "none"
    window.print();
})






