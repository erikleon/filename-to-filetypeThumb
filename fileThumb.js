$.each(result, function(){
     var link = '';
     if(this.files.length > 0){
          for(var i = 0; i < this.files.length; i++){
          	var fileNamed = this.files[i].filename.split('.');
          	var namedType = fileNamed.pop();
          	var fileTypes = ['pdf', 'jpg', 'png', 'gif', 'doc', 'docx', 'ppt', 'pptx', 'zip'];
          	var typeIndex = fileTypes.indexOf(namedType);
          	switch(fileTypes.indexOf(namedType)){
          		case -1:{
          			link += '<a href="./images/assets/'+this.files[i].filename+'">'+this.files[i].filename +'</a><br>';
          			break;
          		}
          		case 0:{
          			link += '<a href="./images/assets/'+this.files[i].filename+'"><img src="./images/pdf.png"></a>';
          			break;
          		}
          		case 1:{
          			link += '<a href="./images/assets/'+this.files[i].filename+'"><img src="./images/jpg.png"></a>';
          			break;
          		}
          		case 2:{
          			link += '<a href="./images/assets/'+this.files[i].filename+'"><img src="./images/png.png"></a>';
          			break;
          		}
          		case 3:{
          			link += '<a href="./images/assets/'+this.files[i].filename+'"><img src="./images/gif.png"></a>';
          			break;
          		}
          		case 4:{
          			link += '<a href="./images/assets/'+this.files[i].filename+'"><img src="./images/doc.png"></a>';
          			break;
          		}
          		case 5:{
          			link += '<a href="./images/assets/'+this.files[i].filename+'"><img src="./images/doc.png"></a>';
          			break;
          		}
          		case 6:{
          			link += '<a href="./images/assets/'+this.files[i].filename+'"><img src="./images/ppt.png"></a>';
          			break;
          		}
          		case 7:{
          			link += '<a href="./images/assets/'+this.files[i].filename+'"><img src="./images/ppt.png"></a>';
          			break;
          		}
          		case 8:{
          			link += '<a href="./images/assets/'+this.files[i].filename+'"><img src="./images/zip.png"></a>';
          			break;
          		}
          		default:{
          		}
          	}
          		//link += '<a href="./images/assets/'+this.files[i].filename+'">'+this.files[i].filename +'</a><br>';
          		//console.log(namedType);
          		//console.log(typeIndex);
         	}	
     }
     else{
          link = 'No files';
     }