const display = document.getElementById('display');
function appendtoDisplay(value) {
    display.value += value;}

    function clearDisplay(){
        display.value = '';}

        function deleteLast(value){
            display.value = display.value.slice(0, -1); 
        }

        function calculateResult() {
    try {
        display.value = eval(display.value); 
        }
        
        catch (error) {
        // Jika user memasukkan rumus yang salah (misal 1++2)
        display.value = "Lu ngapain jir";
        setTimeout(() => clearDisplay(), 1500); // Reset otomatis setelah 1.5 detik
    }
}