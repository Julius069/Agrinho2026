/**
 * PROJETO AGRINHO 2026
 * Script interativo para conscientização sobre proteção de mananciais e agro sustentável.
 */

// Banco de dados de ações sustentáveis focado no equilíbrio e na água
const dicasSustentaveis = [
    "Plante árvores nativas nas margens dos rios (Mata Ciliar) para evitar que a terra caia na água.",
    "Isole e cerque as nascentes da propriedade para evitar o pisoteio de animais e contaminação.",
    "Adote curvas de nível no terreno para reduzir a velocidade da enxurrada e reter a água no solo.",
    "Utilize sistemas de irrigação de precisão (como gotejamento) para evitar o desperdício de água.",
    "Evite aplicar defensivos agrícolas ou fertilizantes em dias de chuva forte ou perto de fontes de água.",
    "Pratique a rotação de culturas para manter o solo rico e melhorar a absorção natural da água da chuva.",
    "Armazene a água da chuva dos telhados dos galpões para usar na limpeza ou tarefas do dia a dia."
];

/**
 * Função que escolhe uma dica aleatória e exibe na tela
 */
function mostrarDica() {
    // 1. Sorteia um número de 0 até o tamanho máximo da nossa lista de dicas
    const indiceAleatorio = Math.floor(Math.random() * dicasSustentaveis.length);
    
    // 2. Localiza a caixa de texto no HTML usando o ID 'caixa-dica'
    const elementoDica = document.getElementById("caixa-dica");
    
    // 3. Insere a dica sorteada dentro da caixa com uma formatação em negrito
    elementoDica.innerHTML = `<strong>Ação Prática:</strong> ${dicasSustentaveis[indiceAleatorio]}`;
    
    // Opcional: Adiciona um efeito simples de piscar para mostrar que mudou
    elementoDica.style.opacity = 0;
    setTimeout(() => {
        elementoDica.style.opacity = 1;
    }, 100);
}