const { Menu, shell } = require("electron");
const autoFindUpdate = require("../functions/autoFindUpdate");
const systemAlerts = require("../functions/systemAlerts");
const fs = require('fs');
const writeVShelfFile = require("../functions/writeVShelfFile");

module.exports = function customMenu(app, win) {
    const template = [
        //Páginas
        {
            label: 'Páginas',
            submenu: [
                {
                    label: 'Página inicial',
                    click: () => { win.loadFile('homePage.html') },
                },
                {
                    label: 'Minha lista',
                    click: () => { win.loadFile('html/minhaLista.html') }
                },
                {
                    label: 'Lista Offline',
                    click: () => { win.loadFile('html/listaOffline.html') }
                },
                {
                    label: 'Filmes Offline',
                    click: () => { win.loadFile('html/filmesOffline.html') }
                },
                {
                    label: 'Compartilhar lista',
                    click: () => { win.loadFile('html/compartilharLista.html') }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Adicionar filme',
                    click: () => { win.loadFile('html/addFilme.html') }
                },
                {
                    type: 'separator',
                },
                {
                    label: 'Lista Dinâmica',
                    click: () => { win.loadFile('html/dynamicList.html') }
                }
            ]
        },

        //Exibição
        {
            label: 'Arquivo',
            submenu: [
                {
                    label: 'Abrir pasta',
                    click: () => { },
                },
                {
                    label: 'Carregar lista offline',
                    click: () => { },
                },
                {
                    label: 'Carregar filme',
                    click: () => { },
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Buscar nova versão',
                    click: () => { },
                },
                {
                    label: 'Encerrar Aplicação',
                    click: () => app.quit(),
                }
            ]
        },

        //Definições
        {
            label: 'Exbir',
            submenu: [
                {
                    label: 'Abrir definições',
                    click: () => { win.loadFile('html/definicoes.html') },
                },
                {
                    label: 'Abrir perfil',
                    click: () => { win.loadFile('html/perfil.html') },
                },
                {
                    label: 'Recarregar Página',
                    role: 'reload',
                },
                {
                    type: 'separator',
                },
                {
                    label: 'Aplicar Zoom',
                    role: 'zoomIn',
                },
                {
                    label: 'Remover Zoom',
                    role: 'zoomOut'
                },
                {
                    label: 'Restaurar Zoom',
                    role: 'resetZoom'
                }
            ],
        },

        //Para Desenvolvedores
        {
            label: 'Desenvolvedores',
            submenu: [
                {
                    label: 'Ferramentas de desenvolvedor',
                    role: 'toggleDevTools',
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Reiniciar aplicação',
                    click: () => {
                        app.relaunch();
                        app.quit();
                    }
                }
            ]
        },

        //Notificações
        {
            label: 'Notificações',
            submenu: [
                {
                    label: 'Alertas do sistema:  ' + `${systemAlerts() === "0" ? 'Não' : 'Sim'}`,
                    click: () => {
                        systemAlerts() === "0" ?
                            writeVShelfFile("./config/system_alerts.vshelf", "1") :
                            writeVShelfFile("./config/system_alerts.vshelf", "0");

                        app.relaunch();
                        app.quit();
                    }
                },
                {
                    label: 'Nova versão:  ' + `${autoFindUpdate() === "0" ? 'Não' : 'Sim'}`,
                    click: () => {
                        autoFindUpdate() === "0" ?
                            writeVShelfFile("./config/auto_update.vshelf", "1") :
                            writeVShelfFile("./config/auto_update.vshelf", "0");

                        app.relaunch();
                        app.quit();
                    }
                }
            ],
        }
    ]

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};