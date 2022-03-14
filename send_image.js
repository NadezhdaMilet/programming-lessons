<!DOCTYPE>
    <body>
        <form id = "form">
            <input type = "file" id = "file_input">
            <button type = "submit" id = "submit_button" > Save file </button> 
        </form>   
        <script>
            let form = document.getElementById('form');
            let input = document.getElementById('file_input');
            
            
            form.addEventListener("submit", (e)  => {
            e.preventDefault();
            consol.log(input.files)
            })

        </script> 
    </body>
</html>