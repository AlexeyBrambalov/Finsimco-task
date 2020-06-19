
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