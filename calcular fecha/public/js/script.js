document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const resultDiv = document.createElement("div");
    form.appendChild(resultDiv);
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const initialDate = new Date(document.getElementById("fechaInicial").value);
      const finalDate = new Date(document.getElementById("fechaFinal").value);
  
      if (isNaN(initialDate) || isNaN(finalDate)) {
        resultDiv.textContent = "Por favor, ingresa fechas válidas.";
        return;
      }
  
      const difference = Math.ceil((finalDate - initialDate) / (1000 * 60 * 60 * 24));
  
      if (difference < 0) {
        resultDiv.textContent = "La fecha final debe ser mayor o igual a la fecha inicial.";
      } else {
        resultDiv.textContent = `Días de diferencia: ${difference}`;
      }
    });
  });
  
  