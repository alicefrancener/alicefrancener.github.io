(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return b})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return m}));var i=t(3),r=t(7),n=(t(0),t(103)),o={id:"git-questions",title:"Quest\xf5es"},b={unversionedId:"git-questions",id:"git-questions",isDocsHomePage:!1,title:"Quest\xf5es",description:"Misc",source:"@site/docs/git-questions.md",slug:"/git-questions",permalink:"/docs/git-questions",editUrl:"https://github.com/alicefrancener/alicefrancener.github.io/edit/master/website/docs/git-questions.md",version:"current",sidebar:"someSidebar",previous:{title:"In\xedcio",permalink:"/docs/git"},next:{title:"Recursos",permalink:"/docs/git-resources"}},l=[{value:"Misc",id:"misc",children:[]},{value:"Tags",id:"tags",children:[]},{value:"Branches",id:"branches",children:[]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[]},{value:"GitHub CLI",id:"github-cli",children:[]}],c={toc:l};function m(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"misc"},"Misc"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"https://levelup.gitconnected.com/how-to-update-fork-repo-from-original-repo-b853387dd471"},"How to Update Fork Repo From Original Repo?")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-bash"},"# Set the original repo as your upstream repo\ngit remote add upstream <original repo>\n\n# Update your local Master to be in synch with the original repo\ngit pull upstream master\n\n# Update the forked repo master by pushing the local repo up\ngit push origin master\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"https://medium.com/altcampus/how-to-merge-two-or-multiple-git-repositories-into-one-9f8a5209913f"},"How to merge two or multiple git repositories into one?")),Object(n.b)("p",{parentName:"li"},"Considerando que h\xe1 dois reposit\xf3rios que voc\xea deseja unir (",Object(n.b)("em",{parentName:"p"},"merge"),"), ",Object(n.b)("inlineCode",{parentName:"p"},"sub-projeto")," e ",Object(n.b)("inlineCode",{parentName:"p"},"projeto"),":"),Object(n.b)("p",{parentName:"li"},"Entre no reposit\xf3rio no qual voc\xea quer combinar com o outro (ex.: dentro de ",Object(n.b)("inlineCode",{parentName:"p"},"projeto")," irei combinar o repo ",Object(n.b)("inlineCode",{parentName:"p"},"sub-projeto"),")."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-bash"},"git remote add -f sub-projeto git@github.com:username/sub-projeto.git\n")),Object(n.b)("p",{parentName:"li"},"Combine os reposit\xf3rios."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-bash"},"git merge sub-projeto/master --allow-unrelated-histories\n")),Object(n.b)("p",{parentName:"li"},"Nesse ponto, os reposit\xf3rios foram combinados."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Uma dica para evitar conflitos entre arquivos \xe9 verificar antes os dois reposit\xf3rios que ser\xe3o combinados. Geralmente arquivos que est\xe3o na raiz como ",Object(n.b)("inlineCode",{parentName:"li"},".gitignore"),", ",Object(n.b)("inlineCode",{parentName:"li"},"LICENSE")," and ",Object(n.b)("inlineCode",{parentName:"li"},"README")," geram conflitos, pois existem nos dois reposit\xf3rios; eles podem ser renomeados ou movidos para outra pasta antes do ",Object(n.b)("inlineCode",{parentName:"li"},"merge"),".")))),Object(n.b)("h2",{id:"tags"},"Tags"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Como listar tags?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git tag")))),Object(n.b)("li",{parentName:"ul"},"Como procurar por uma tag?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'git tag -l "v1.8.5*"'),': procurar por tags "v1.8.5" (express\xe3o regular)'))),Object(n.b)("li",{parentName:"ul"},"Como mostrar informa\xe7\xf5es sobre uma tag?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git show v1.4"),": mostra informa\xe7\xf5es sobre a tag v1.4"))),Object(n.b)("li",{parentName:"ul"},"Como criar tag?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'git tag -a v1.4 -m "my version 1.4"'),": cria annotated tag (-a) com mensagem (-m)"))),Object(n.b)("li",{parentName:"ul"},"Como criar tag para um commit espec\xedfico?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git tag -a <nome-da-tag> <SHAcommit>")))),Object(n.b)("li",{parentName:"ul"},"Como push uma tag?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Ao usar o ",Object(n.b)("inlineCode",{parentName:"li"},"git push")," ele n\xe3o envia por padr\xe3o as tags"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git push origin <nome-da-tag>"),": enviar a tag para origin"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git push origin --tags"),": enviar todas as tags para remote que ainda n\xe3o est\xe3o l\xe1"))),Object(n.b)("li",{parentName:"ul"},"Como deletar tags local e remota?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git tag -d <tagname>"),": deletar tag localmente"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git push origin --delete <tagname>"),": deletar tag remotamente")))),Object(n.b)("h2",{id:"branches"},"Branches"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Como listar (somente) branches remotas?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git branch --remotes")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git branch --r")))),Object(n.b)("li",{parentName:"ul"},"Como listar todas as branches (remotas e locais)?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git branch --all")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git branch -a"))))),Object(n.b)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Quando fazer um ",Object(n.b)("em",{parentName:"p"},"commit"),"? "),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Com frequ\xeancia"),Object(n.b)("li",{parentName:"ul"},"Quando est\xe1 em um estado do qual quer poder voltar"),Object(n.b)("li",{parentName:"ul"},"Quando se finaliza uma unidade de trabalho, um aspecto do trabalho"),Object(n.b)("li",{parentName:"ul"},"N\xe3o se limita ao n\xfamero de linhas de c\xf3digo ou n\xfamero de arquivos modificados"),Object(n.b)("li",{parentName:"ul"},"N\xe3o dar ",Object(n.b)("em",{parentName:"li"},"commits")," quando o c\xf3digo n\xe3o funciona"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Como escrever boas mensagens de ",Object(n.b)("em",{parentName:"p"},"commit"),"?"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Adotar padr\xf5es (style guide)")),Object(n.b)("p",{parentName:"li"},"Adotar uma conven\xe7\xe3o/padr\xe3o \xe9 uma boa pr\xe1tica para manter organizado o log das mensagens de commit. Um padr\xe3o legal \xe9:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-bash"},"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer]\n")),Object(n.b)("p",{parentName:"li"},"O ",Object(n.b)("inlineCode",{parentName:"p"},"type")," e a ",Object(n.b)("inlineCode",{parentName:"p"},"description")," s\xe3o obrigat\xf3rias, os demais campos s\xe3o opcionais."),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"type")," pode ser:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"feat (new feature)"),Object(n.b)("li",{parentName:"ul"},"fix (bug fix)"),Object(n.b)("li",{parentName:"ul"},"docs (changes to documentation)"),Object(n.b)("li",{parentName:"ul"},"style (formatting, missing semi colons, etc; no code change)"),Object(n.b)("li",{parentName:"ul"},"refactor (refactoring production code)"),Object(n.b)("li",{parentName:"ul"},"test (adding missing tests, refactoring tests; no production code change)"),Object(n.b)("li",{parentName:"ul"},"chore (updating grunt tasks etc; no production code change)"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Escrever mensagem de commit sem conjun\xe7\xf5es aditivas")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Se na mensagem \xe9 necess\xe1rio usar uma conjun\xe7\xe3o aditiva, como 'e' (\"mudan\xe7a x E mudan\xe7a Y\") ent\xe3o deveriam ser dois commits separados"),Object(n.b)("li",{parentName:"ul"},"Isso n\xe3o quer dizeR que precise ser altera\xe7\xe3o em um s\xf3 arquivo, mas que devem estar no mesmo contexto de mudan\xe7a"),Object(n.b)("li",{parentName:"ul"},"Ao commitar altera\xe7\xf5es menores \xe9 mais f\xe1cil escrever a mensagem de commit"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Referenciar e fechar issues/pull requests com a mensagem de commit")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Se um commit referencias uma issue ou pull request, adicionar isso \xe0 mensagem \xe9 legal"),Object(n.b)("li",{parentName:"ul"},'No GitHub, ao se utilizar #NumeroIssue faz uma refer\xeancia. Se usar as palavras "Fix #123, Fixes #123, Close #123" tamb\xe9m j\xe1 fecha automaticamente a issue/pull request.')))))),Object(n.b)("h2",{id:"github-cli"},"GitHub CLI"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"How to create a new GitHub repository?"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"gh repo create [<name>] [flags]"))),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-bash"},"# create a repository under your account using the current directory name\n$ gh repo create\n\n# create a repository with a specific name\n$ gh repo create my-project\n\n# create a repository in an organization\n$ gh repo create cli/my-project\n")))))}m.isMDXComponent=!0}}]);