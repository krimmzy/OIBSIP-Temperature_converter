document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const temp = parseFloat(document.getElementById('temperature').value);
    const unitFrom = document.getElementById('unit-from').value;
    const unitTo = document.getElementById('unit-to').value;
    
    let result;
    
    if (unitFrom === unitTo) {
        result = temp;
    } else if (unitFrom === 'C') {
        if (unitTo === 'F') {
            result = (temp * 9/5) + 32;
        } else if (unitTo === 'K') {
            result = temp + 273.15;
        }
    } else if (unitFrom === 'F') {
        if (unitTo === 'C') {
            result = (temp - 32) * 5/9;
        } else if (unitTo === 'K') {
            result = (temp - 32) * 5/9 + 273.15;
        }
    } else if (unitFrom === 'K') {
        if (unitTo === 'C') {
            result = temp - 273.15;
        } else if (unitTo === 'F') {
            result = (temp - 273.15) * 9/5 + 32;
        }
    }
    
    document.getElementById('result').textContent = `Result: ${result.toFixed(2)} ${unitTo}`;
});
