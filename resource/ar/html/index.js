function appendAR(path){
    var text = '<model-viewer alt="A 3D model " src="'+path+'" camera-controls environment-image="neutral" shadow-intensity="1"></model-viewer>';
    document.getElementById("ar").insertAdjacentHTML('afterbegin',text);
} 

//setTimeout(() => {  appendAR("../glb/test.glb"); }, 1000);


