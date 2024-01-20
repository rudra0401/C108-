dog=0;
cat=0;
function startClasssification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", modelReady);
}
function modelReady(){
    classifer.classify(gotResults);
}
function gotResults(error , results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255)+1;
        random_number_g = Math.floor(Math.random()* 255)+1;
        random_number_b = Math.floor(Math.random()* 255)+1;

        document.getElementById("result_label").innerHTML="detected voice of "+ results[0].label;
        document.getElementById("result_count").innerHTML="detected dog "+ dog+"detected cat "+ cat;
        document.getElementById("result_label").style.color='rgb('+random_number_r+' ,'+random_number_g+',' +random_number_b+')';
        document.getElementById("result_confidence").style.color='rgb('+random_number_r+' ,'+random_number_g+',' +random_number_b+')';
        img= document.getElementById('animal_img');
        if(results[0].label =="barking"){
            img.src='bark.png';
            dog++;
        }
        else if(results[0].label =="meowing"){
            img.src='meowing.png';
            cat++;
        }
        else{
            img.src="download(6).png"
        }
    }
}