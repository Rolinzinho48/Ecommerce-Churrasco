let contador = 0
let precinho = 0

let produtos = [
    {
        img_src: "ChurrasVegano.png",
        categoria: "Simples",
        titulo: "Churrasco Vegano",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        preco: 25.00,
        precoString: "R$ 25.00"
    },
    {
        img_src: "Barbecue.png",
        categoria: "Simples",
        titulo: "Barbecue",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        preco: 15.00,
        precoString: "R$ 15.00"
    },
    {
        img_src: "FrangoAssado.png",
        categoria: "Simples",
        titulo: "Frango Assado Simples",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        preco: 10.00,
        precoString: "R$ 10.00"
    },
    {
        img_src: "FrangoAssado2.png",
        categoria: "Completo",
        titulo: "Frango Assado Completo",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        preco:  15.00,
        precoString: "R$ 15.00"
    },
    {
        img_src: "PicanhaSimples.png",
        categoria: "Simples",
        titulo: "Picanha Simples",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        preco:  20.00,
        precoString: "R$ 20.00"
    },
    {
        img_src: "PicanhaCompleto.png",
        categoria: "Completo",
        titulo: "Picanha Completo",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        preco: 25.00,
        precoString: "R$ 25.00"
    },
    {
        img_src:"ComboEspeto.jpg",
        categoria:"Combo",
        titulo: "Combos de 5 Espetinhos",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        preco: 30.00,
        precoString: "R$ 30.00"
    },
    {
        img_src:"ComboPrato.jpg",
        categoria:"Combo",
        titulo: "Combos de 3 Pratos",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        preco: 120.00,
        precoString: "R$ 120.00"
    }

]

Start()

    function Start(){

        for(let i = 0;i<produtos.length;i++){
            if(document.getElementById(`Produto${i}`) != null){
                document.getElementById(`Produto${i}`).remove()
            }
            
        }

        for(let i =0;i<produtos.length;i++){
            CriarElementos(i)
        }
        
    }

    function CriarElementos(i){
   
            let cardProduto = document.createElement("div")
            cardProduto.classList.add("card_produto")
            cardProduto.id = `Produto${i}`
            let divImagem = document.createElement("div")
            divImagem.classList.add("div_imagem")
            let Imagem = document.createElement("img")
            Imagem.src = produtos[i].img_src
            Imagem.style.height = "20vh"
            let divTexto = document.createElement("div")
            divTexto.classList.add("div_texto")
            let categoria = document.createElement("span")
            categoria.classList.add("categoria")
            categoria.innerText = produtos[i].categoria
            let title = document.createElement("h3")
            title.innerText = produtos[i].titulo
            let desc = document.createElement("span")
            desc.classList.add("card_descricao")
            desc.innerText = produtos[i].descricao
            let price = document.createElement("span")
            price.innerText = "R$ " + produtos[i].preco.toFixed([2])
            price.classList.add("card_price")
            let Adicionar = document.createElement("a")
            Adicionar.innerText = "Adicionar ao carrinho"
            Adicionar.href = "#"
            Adicionar.addEventListener("click",AdicionarAoCarrinho)
        
        
            divImagem.appendChild(Imagem)
            divTexto.appendChild(categoria)
            divTexto.appendChild(title)
            divTexto.appendChild(desc)
            divTexto.appendChild(price)
            divTexto.appendChild(Adicionar)
            cardProduto.appendChild(divImagem)
            cardProduto.appendChild(divTexto)
            document.getElementById("eusla").appendChild(cardProduto)
   
    }

    function Pesquisar(){

        let conteudo = document.getElementById("input-pesquisa").value

        for(let i = 0;i<produtos.length;i++){
            if(document.getElementById(`Produto${i}`) != null){
                document.getElementById(`Produto${i}`).remove()
            }
            
        }

        for(let i=0;i<produtos.length;i++){
            if(produtos[i].titulo == conteudo){
                CriarElementos(i)
            }
        }
        
    }

    function Filtro(categoria){
      

        for(let i = 0;i<produtos.length;i++){
            if(document.getElementById(`Produto${i}`) != null){
                document.getElementById(`Produto${i}`).remove()
            }
            
        }
    
            for(let i=0;i<produtos.length;i++){
                if(produtos[i].categoria == categoria){
                    CriarElementos(i)
                }
            }

    }

       
    

    const captura = document.getElementById("carrinho_vazio")


    function GerarIndice(txt){
        for(let i =0;i<produtos.length;i++){
            if(produtos[i].precoString == txt){
                return produtos[i].preco
            }
        }
    }

    function AdicionarAoCarrinho(event){

        contador++
        let sla = GerarIndice(event.target.parentElement.children[3].textContent)
        precinho += parseFloat(sla)
        
        if(contador == 1){
            document.getElementById("carrinho").innerHTML = ""
        }
        
        document.getElementById("qtd_produtos").innerText = `${contador}`
        document.getElementById("total").innerText = "R$"+`${precinho}`+".00"

        const container = document.createElement("div")
        const divImg = document.createElement("div")
        const divTxt = document.createElement("div")
        const foto = document.createElement("img")
        const titulo = document.createElement("h2")
        const preco = document.createElement("span")
        const remover = document.createElement("a")


        foto.src = event.target.parentElement.parentElement.children[0].children[0].src
        titulo.innerText = event.target.parentElement.children[1].textContent
        preco.innerText = event.target.parentElement.children[3].textContent
        
        remover.innerText = "Remover produto"
        remover.addEventListener("click",RemoverProduto)
        divTxt.classList.add("divTxt")
        
        divImg.appendChild(foto) 
        divTxt.appendChild(titulo)
        divTxt.appendChild(preco)
        divTxt.appendChild(remover)

        container.appendChild(divImg)
        container.appendChild(divTxt)
        container.classList.toggle("item_adicionado")
        
        document.getElementById("carrinho").appendChild(container)
        
    }
    
    

    function RemoverProduto(event){
        event.target.parentElement.parentElement.remove()
        
        contador--
        let sla = GerarIndice(event.target.parentElement.children[1].textContent)
        precinho -= parseFloat(sla)
   

        if(contador == 0){
            document.getElementById("carrinho").appendChild(captura)
        }
        document.getElementById("qtd_produtos").innerText = `${contador}`

        document.getElementById("total").innerText = "R$"+`${precinho}`+".00"
    }

    function DarkMode(){
       
    
            document.querySelector("body").classList.toggle("body_dark")
            document.getElementById("carrinho").classList.toggle("carrinho_compras_dark")
    
    }

const botao = document.getElementById("btn_pesquisa")
botao.addEventListener("click",Pesquisar)

const todos = document.getElementById("filtro_todos")
todos.addEventListener("click",Start)

const btn_dark = document.getElementById("dark_mode")
btn_dark.addEventListener("click",DarkMode)

