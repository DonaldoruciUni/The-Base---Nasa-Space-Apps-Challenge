var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "Why do stars twinkle ?",
        choices: ["Gas release","Earth’s atmosphere interference","Our eyes trick us","They are dying"],
        answer: 4
    
    },
    
    {
        question: "When was Kepler’s telescope launched?",
        choices: ["2003","2006","2009","Hasnt launched yet"],
        answer: 3
    
    },

    {
        question: "How many years is the Solar Cycle?",
        choices: ["6 years","15 years","24 years","11 years"],
        answer: 4
    
    },

    {
        question: "Which is the cause why some stars vary extrinsically?",
        choices: ["external causes","internal causes","brightness increases and decreases","explosive events"],
        answer: 1
    
    }
    
                
];


var CSSquestions=[

    {
        question: "What are Cepheid Variables? ",
        choices: ["Stars","Constallations","Meteors"," Galaxy"],
        answer: 1
    
    }, 
    {/*wscubetech*/
        question: "Cepheids are:",
        choices: ["very bright  ","very dim","normal brightness","no one knows yet"],
        answer: 1
    
    },
    {
        question: "Cepheids can be seen only in our galaxy.  ",
        choices: ["False","True"],
        answer: 1
    
    } 
    
];

var jsquestions=[

    {
        question: "What are light curves?",
        choices: ["Graphs","Lines we can see up in the sky","Constellation connection lines","Eye tricks"],
        answer: 1
    
    }, 
    {
        question: "How many days does it take for one of the stars in the binary to orbit completely around the other?",
        choices: ["12 days","20 days","10 days","24 hours"],
        answer: 3
    
    },
    {
        question: "What is a supernova?",
        choices: ["Birth of a star","Death of a star    ","Two stars colliding","Meteor crash"],
        answer: 2
    
    }
                
];


var PYquestions=[

    {
        question: "A classical nova outburst is: ",
        choices: ["The same as a supernova explosion","Nuclear fusion on the white dwarf surface  ","The death of one of the stars in the system","None of the above"],
        answer: 2
    
    }, 
    {
        question: "When were CVs discovered?",
        choices: [" 20th century","17th century","21st century","19th century"],
        answer: 4
    
    },
    {
        question: "What are the majority of dwarfs composed with?",
        choices: ["Carbon ","Hydrogen","Nytrogen","Oxygen"],
        answer: 1
    
    } 
   
                
];





//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions.";
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});




/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});