function solve() { 
    let text = document.getElementById('text').value.toLowerCase(); 
    let namingConvention = document.getElementById('naming-convention').value; 
    let result = ''; 
    
    if (namingConvention === 'Pascal Case') { 
        result = toPascalCase(text); 
    } else if (namingConvention === 'Camel Case') { 
        result = toCamelCase(text); 
    } else { 
        result = 'Error!'; 
    } 
    
    document.getElementById('result').textContent = result; 
    
    function toPascalCase(str) { 
        return str
            .trim()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(''); 
    } 
    
    function toCamelCase(str) {
        let words = str.trim().split(/\s+/); 
        return words
            .map((word, index) => 
                index === 0 
                    ? word 
                    : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(''); 
    } 
}
