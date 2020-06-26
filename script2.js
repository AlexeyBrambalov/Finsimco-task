
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



            // var m = moment(new Date(2020, 6, 1));
            // console.log(m.toString());
            // console.log(m.add("days",1).toString());