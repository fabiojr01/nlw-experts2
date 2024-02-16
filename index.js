const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      resposta: [
        "Uma linguagem de programação de estilos",
        "Uma marca de café",
        "Um navegador da web",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      resposta: [
        "Comparação estrita de valor e tipo",
        "Atribuição de valor",
        "Concatenação de strings",
      ],
      correta: 2
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      resposta: [
        "let myVar;",
        "const myVar = 10;",
        "ambas as opções acima estão corretas",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      resposta: [
        "Um bloco de código reutilizável",
        "Um tipo de dado",
        "Um operador lógico",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      resposta: [
        "let permite reatribuição, const não permite",
        "const é usado para strings, let para números",
        "Não há diferença, são intercambiáveis",
      ],
      correta: 0
    },
    {
      pergunta: "Como adicionar um comentário de linha em JavaScript?",
      resposta: [
        "// Este é um comentário",
        "' Este é um comentário",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para imprimir algo no console em JavaScript?",
      resposta: [
        "console.log()",
        "print()",
        "showMessage()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      resposta: [
        "A representação da estrutura de uma página HTML/XML como objetos",
        "Um novo tipo de dado",
        "Um framework JavaScript popular",
      ],
      correta: 0
    },
    {
      pergunta: "Como verificar o tipo de uma variável em JavaScript?",
      resposta: [
        "Usando o operador 'typeof'",
        "Com um condicional 'if'",
        "Através do método 'getType()'",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      resposta: [
        "Uma ação detectada que pode ser respondida no código",
        "Uma variável global",
        "Um tipo de dado primitivo",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent =item.pergunta
    
    for(let resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
    
     
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  