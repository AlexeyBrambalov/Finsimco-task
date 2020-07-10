
            document.getElementById("flashreport").addEventListener("click", ()=>{
                $("#textarea").show();
                $("#upload").hide();
            })
            
            document.getElementById("fullreport").addEventListener("click", ()=>{
                $("#textarea").hide();
                $("#upload").show();
            })


            
            if(document.getElementById("flashreport").checked){
                $("#textarea").show();
                $("#upload").hide();
            } 

            function theimage(){
                var filename = document.getElementById("file-id").files[0].name; 
                document.getElementById('upload-file-info').innerText = filename;
            }

            function theimage2(){
                var filename = document.getElementById("file-id2").files[0].name; 
                document.getElementById('upload-file-info2').innerText = filename;

            }


            // document.getElementById("flashreport2").addEventListener("click", ()=>{
            //     $("#textarea2").show();
            //     $("#upload2").hide();
            // })
            
            // document.getElementById("fullreport2").addEventListener("click", ()=>{
            //     $("#textarea2").hide();
            //     $("#upload2").show();
            // })


            
            // if(document.getElementById("flashreport2").checked){
            //     $("#textarea2").show();
            //     $("#upload2").hide();
            // } 

            // function theimage3(){
            //     var filename = document.getElementById("file-id3").files[0].name; 
            //     document.getElementById('upload-file-info3').innerText = filename;
            // }

            // function theimage4(){
            //     var filename = document.getElementById("file-id4").files[0].name; 
            //     document.getElementById('upload-file-info4').innerText = filename;
            // }


            // document.getElementById("flashreport3").addEventListener("click", ()=>{
            //     $("#textarea3").show();
            //     $("#upload3").hide();
            // })
            
            // document.getElementById("fullreport3").addEventListener("click", ()=>{
            //     $("#textarea3").hide();
            //     $("#upload3").show();
            // })


            
            // if(document.getElementById("flashreport3").checked){
            //     $("#textarea3").show();
            //     $("#upload3").hide();
            // } 

            // function theimage5(){
            //     var filename = document.getElementById("file-id5").files[0].name; 
            //     document.getElementById('upload-file-info7').innerText = filename;
            // }

            // function theimage6(){
            //     var filename = document.getElementById("file-id6").files[0].name; 
            //     document.getElementById('upload-file-info8').innerText = filename;
            // }


            // document.getElementById("flashreport4").addEventListener("click", ()=>{
            //     $("#textarea4").show();
            //     $("#upload4").hide();
            // })
            
            // document.getElementById("fullreport4").addEventListener("click", ()=>{
            //     $("#textarea4").hide();
            //     $("#upload4").show();
            // })


            
            // if(document.getElementById("flashreport4").checked){
            //     $("#textarea4").show();
            //     $("#upload4").hide();
            // } 

            // function theimage(){
            //     var filename = document.getElementById("file-id7").files[0].name; 
            //     document.getElementById('upload-file-info9').innerText = filename;
            // }

            // function theimage2(){
            //     var filename = document.getElementById("file-id8").files[0].name; 
            //     document.getElementById('upload-file-info10').innerText = filename;
            // }
