(function($){  
/**
* 
* @description Abre uma paleta de cores para trocar a cor do elemento selecionado.
*   
* @syntax $.fn.getColor.defaults.selectRapido  = false;
* @syntax $(seletor).getColor();
* 
* @param   {Boolean} [false] Fecha a box automaticamente após selecionar uma cor da paleta de cores.
* @param   {String}  [tipo]  Tipo do elemento a ser colorido.
* @param   {Number}  [500]   Tempo de duração da animação de entrada.
* @param   {Number}  [250]   Tempo de duração da animação de saida.
* @param   {String}  [fold]  Tipo de animação/efeito de entrada.
* @param   {String}  [blind] Tipo de animação/efeito de saida.
*
* @version 1.0.0
* 
*/
$.fn.getColor = function(options)
{
    var $_VAR = {
            id             : "",
            corSelecionada : "",
            /* div responsável por carregar o plugin */
            boxGetColor    : "<div id=\"boxGetColor\"></div>",
            /* barra do topo com o botão fechar */
            barraTopo      : "<div id=\"barraTopo\"><div class=\"iconeFechar\" id=\"fecharPaleta\"></div></div>",
            /* barra com a cor selecionada e o botão salvar */
            barraOpcoes    : "<div id=\"barraOpcoes\"><div id=\"boxTextoCor\"><p id=\"textoCor\">Selecionado</p></div><div id=\"corSelecionada\"></div><button id=\"salvarCor\">Salvar</button></div>"
    },
    
    config = $.extend({}, $.fn.getColor.defaults, options);
    
    /* Função para adicionar atributos/propriedades ao elemento */
    $propriedades = function($t, $css)
    {;
        $($t).css($css);
    };
    
    /* Função para separar as classes e retornar a getColor se existir */
    $separaClasses = function($t)
    {
        var selector = $($t)
        .parents()
        .map(function() { return $t.tagName; })
        .get()
        .reverse()
        .concat([$t.nodeName])
        .join(">");

    var id = $($t).attr("id");
    if (id) { 
      selector += id;
    }

    var classe = $($t).attr("class");
    if (classe) {
      selector += "." + $.trim(classe).replace(/\s/gi, ".");
    }

    var array = selector.split(".");
    
    var retorno;
    
    $.each(array, function()
    {
        if(this == "getColorSvg")
        {
            retorno = "getColorSvg";
        }
        else if(this == "getColorTexto")
        {
            retorno = "getColorTexto";
        }
        else if(this == "getColorFundo")
        {
            retorno = "getColorFundo";
        }
    });
    
    return retorno;
    
    };
    
    /* Função para montar a box de exibição da paleta de cores */
    $monta = function($t, $classe, $id, $retorno, $seletor, $option)
    {
        var $box = "";

        if($option == false)
        {
            $("#boxGetColor").css('height','263px');
            $box+= $_VAR.barraTopo;
            $box+= $_VAR.barraOpcoes;
        }
        else
        {
            $("#boxGetColor").css('height','231px');
            $box+= $_VAR.barraTopo;
        }

        $box+= "<table id=\"paletaCor\">";
        $box+= "<tr title=\"variação 1\"><td bgColor=\"#FBEFEF\"></td><td bgColor=\"#FBF2EF\"></td><td bgColor=\"#FBF5EF\"></td><td bgColor=\"#FBF8EF\"></td><td bgColor=\"#FBFBEF\"></td><td bgColor=\"#F8FBEF\"></td><td bgColor=\"#F5FBEF\"></td><td bgColor=\"#F2FBEF\"></td><td bgColor=\"#EFFBEF\"></td><td bgColor=\"#EFFBF2\"></td><td bgColor=\"#EFFBF5\"></td><td bgColor=\"#EFFBF8\"></td><td bgColor=\"#EFFBFB\"></td><td bgColor=\"#EFF8FB\"></td><td bgColor=\"#EFF5FB\"></td><td bgColor=\"#EFF2FB\"></td><td bgColor=\"#EFEFFB\"></td><td bgColor=\"#F2EFFB\"></td><td bgColor=\"#F5EFFB\"></td><td bgColor=\"#F8EFFB\"></td><td bgColor=\"#FBEFFB\"></td><td bgColor=\"#FBEFF8\"></td><td bgColor=\"#FBEFF5\"></td><td bgColor=\"#FBEFF2\"></td><td bgColor=\"#FFFFFF\"></td></tr>";
        $box+= "<tr title=\"variação 2\"><td bgColor=\"#F8E0E0\"></td><td bgColor=\"#F8E6E0\"></td><td bgColor=\"#F8ECE0\"></td><td bgColor=\"#F7F2E0\"></td><td bgColor=\"#F7F8E0\"></td><td bgColor=\"#F1F8E0\"></td><td bgColor=\"#ECF8E0\"></td><td bgColor=\"#E6F8E0\"></td><td bgColor=\"#E0F8E0\"></td><td bgColor=\"#E0F8E6\"></td><td bgColor=\"#E0F8EC\"></td><td bgColor=\"#E0F8F1\"></td><td bgColor=\"#E0F8F7\"></td><td bgColor=\"#E0F2F7\"></td><td bgColor=\"#E0ECF8\"></td><td bgColor=\"#E0E6F8\"></td><td bgColor=\"#E0E0F8\"></td><td bgColor=\"#E6E0F8\"></td><td bgColor=\"#ECE0F8\"></td><td bgColor=\"#F2E0F7\"></td><td bgColor=\"#F8E0F7\"></td><td bgColor=\"#F8E0F1\"></td><td bgColor=\"#F8E0EC\"></td><td bgColor=\"#F8E0E6\"></td><td bgColor=\"#FAFAFA\"></td></tr>";
        $box+= "<tr title=\"variação 3\"><td bgColor=\"#F6CECE\"></td><td bgColor=\"#F6D8CE\"></td><td bgColor=\"#F6E3CE\"></td><td bgColor=\"#F5ECCE\"></td><td bgColor=\"#F5F6CE\"></td><td bgColor=\"#ECF6CE\"></td><td bgColor=\"#E3F6CE\"></td><td bgColor=\"#D8F6CE\"></td><td bgColor=\"#CEF6CE\"></td><td bgColor=\"#CEF6D8\"></td><td bgColor=\"#CEF6E3\"></td><td bgColor=\"#CEF6EC\"></td><td bgColor=\"#CEF6F5\"></td><td bgColor=\"#CEECF5\"></td><td bgColor=\"#CEE3F6\"></td><td bgColor=\"#CED8F6\"></td><td bgColor=\"#CECEF6\"></td><td bgColor=\"#D8CEF6\"></td><td bgColor=\"#E3CEF6\"></td><td bgColor=\"#ECCEF5\"></td><td bgColor=\"#F6CEF5\"></td><td bgColor=\"#F6CEEC\"></td><td bgColor=\"#F6CEE3\"></td><td bgColor=\"#F6CED8\"></td><td bgColor=\"#F2F2F2\"></td></tr>";
        $box+= "<tr title=\"variação 4\"><td bgColor=\"#F5A9A9\"></td><td bgColor=\"#F5BCA9\"></td><td bgColor=\"#F5D0A9\"></td><td bgColor=\"#F3E2A9\"></td><td bgColor=\"#F2F5A9\"></td><td bgColor=\"#E1F5A9\"></td><td bgColor=\"#D0F5A9\"></td><td bgColor=\"#BCF5A9\"></td><td bgColor=\"#A9F5A9\"></td><td bgColor=\"#A9F5BC\"></td><td bgColor=\"#A9F5D0\"></td><td bgColor=\"#A9F5E1\"></td><td bgColor=\"#A9F5F2\"></td><td bgColor=\"#A9E2F3\"></td><td bgColor=\"#A9D0F5\"></td><td bgColor=\"#A9BCF5\"></td><td bgColor=\"#A9A9F5\"></td><td bgColor=\"#BCA9F5\"></td><td bgColor=\"#D0A9F5\"></td><td bgColor=\"#E2A9F3\"></td><td bgColor=\"#F5A9F2\"></td><td bgColor=\"#F5A9E1\"></td><td bgColor=\"#F5A9D0\"></td><td bgColor=\"#F5A9BC\"></td><td bgColor=\"#E6E6E6\"></td></tr>";
        $box+= "<tr title=\"variação 5\"><td bgColor=\"#F78181\"></td><td bgColor=\"#F79F81\"></td><td bgColor=\"#F7BE81\"></td><td bgColor=\"#F5DA81\"></td><td bgColor=\"#F3F781\"></td><td bgColor=\"#D8F781\"></td><td bgColor=\"#BEF781\"></td><td bgColor=\"#9FF781\"></td><td bgColor=\"#81F781\"></td><td bgColor=\"#81F79F\"></td><td bgColor=\"#81F7BE\"></td><td bgColor=\"#81F7D8\"></td><td bgColor=\"#81F7F3\"></td><td bgColor=\"#81DAF5\"></td><td bgColor=\"#81BEF7\"></td><td bgColor=\"#819FF7\"></td><td bgColor=\"#8181F7\"></td><td bgColor=\"#9F81F7\"></td><td bgColor=\"#BE81F7\"></td><td bgColor=\"#DA81F5\"></td><td bgColor=\"#F781F3\"></td><td bgColor=\"#F781D8\"></td><td bgColor=\"#F781BE\"></td><td bgColor=\"#F7819F\"></td><td bgColor=\"#D8D8D8\"></td></tr>";
        $box+= "<tr title=\"variação 6\"><td bgColor=\"#FA5858\"></td><td bgColor=\"#FA8258\"></td><td bgColor=\"#FAAC58\"></td><td bgColor=\"#F7D358\"></td><td bgColor=\"#F4FA58\"></td><td bgColor=\"#D0FA58\"></td><td bgColor=\"#ACFA58\"></td><td bgColor=\"#82FA58\"></td><td bgColor=\"#58FA58\"></td><td bgColor=\"#58FA82\"></td><td bgColor=\"#58FAAC\"></td><td bgColor=\"#58FAD0\"></td><td bgColor=\"#58FAF4\"></td><td bgColor=\"#58D3F7\"></td><td bgColor=\"#58ACFA\"></td><td bgColor=\"#5882FA\"></td><td bgColor=\"#5858FA\"></td><td bgColor=\"#8258FA\"></td><td bgColor=\"#AC58FA\"></td><td bgColor=\"#D358F7\"></td><td bgColor=\"#FA58F4\"></td><td bgColor=\"#FA58D0\"></td><td bgColor=\"#FA58AC\"></td><td bgColor=\"#FA5882\"></td><td bgColor=\"#BDBDBD\"></td></tr>";
        $box+= "<tr title=\"variação 7\"><td bgColor=\"#FE2E2E\"></td><td bgColor=\"#FE642E\"></td><td bgColor=\"#FE9A2E\"></td><td bgColor=\"#FACC2E\"></td><td bgColor=\"#F7FE2E\"></td><td bgColor=\"#C8FE2E\"></td><td bgColor=\"#9AFE2E\"></td><td bgColor=\"#64FE2E\"></td><td bgColor=\"#2EFE2E\"></td><td bgColor=\"#2EFE64\"></td><td bgColor=\"#2EFE9A\"></td><td bgColor=\"#2EFEC8\"></td><td bgColor=\"#2EFEF7\"></td><td bgColor=\"#2ECCFA\"></td><td bgColor=\"#2E9AFE\"></td><td bgColor=\"#2E64FE\"></td><td bgColor=\"#2E2EFE\"></td><td bgColor=\"#642EFE\"></td><td bgColor=\"#9A2EFE\"></td><td bgColor=\"#CC2EFA\"></td><td bgColor=\"#FE2EF7\"></td><td bgColor=\"#FE2EC8\"></td><td bgColor=\"#FE2E9A\"></td><td bgColor=\"#FE2E64\"></td><td bgColor=\"#A4A4A4\"></td></tr>";
        $box+= "<tr title=\"variação 8\"><td bgColor=\"#FF0000\"></td><td bgColor=\"#FF4000\"></td><td bgColor=\"#FF8000\"></td><td bgColor=\"#FFBF00\"></td><td bgColor=\"#FFFF00\"></td><td bgColor=\"#BFFF00\"></td><td bgColor=\"#80FF00\"></td><td bgColor=\"#40FF00\"></td><td bgColor=\"#00FF00\"></td><td bgColor=\"#00FF40\"></td><td bgColor=\"#00FF80\"></td><td bgColor=\"#00FFBF\"></td><td bgColor=\"#00FFFF\"></td><td bgColor=\"#00BFFF\"></td><td bgColor=\"#0080FF\"></td><td bgColor=\"#0040FF\"></td><td bgColor=\"#0000FF\"></td><td bgColor=\"#4000FF\"></td><td bgColor=\"#8000FF\"></td><td bgColor=\"#BF00FF\"></td><td bgColor=\"#FF00FF\"></td><td bgColor=\"#FF00BF\"></td><td bgColor=\"#FF0080\"></td><td bgColor=\"#FF0040\"></td><td bgColor=\"#848484\"></td></tr>";
        $box+= "<tr title=\"variação 9\"><td bgColor=\"#DF0101\"></td><td bgColor=\"#DF3A01\"></td><td bgColor=\"#DF7401\"></td><td bgColor=\"#DBA901\"></td><td bgColor=\"#D7DF01\"></td><td bgColor=\"#A5DF00\"></td><td bgColor=\"#74DF00\"></td><td bgColor=\"#3ADF00\"></td><td bgColor=\"#01DF01\"></td><td bgColor=\"#01DF3A\"></td><td bgColor=\"#01DF74\"></td><td bgColor=\"#01DFA5\"></td><td bgColor=\"#01DFD7\"></td><td bgColor=\"#01A9DB\"></td><td bgColor=\"#0174DF\"></td><td bgColor=\"#013ADF\"></td><td bgColor=\"#0101DF\"></td><td bgColor=\"#3A01DF\"></td><td bgColor=\"#7401DF\"></td><td bgColor=\"#A901DB\"></td><td bgColor=\"#DF01D7\"></td><td bgColor=\"#DF01A5\"></td><td bgColor=\"#DF0174\"></td><td bgColor=\"#DF013A\"></td><td bgColor=\"#6E6E6E\"></td></tr>";
        $box+= "<tr title=\"variação 10\"><td bgColor=\"#B40404\"></td><td bgColor=\"#B43104\"></td><td bgColor=\"#B45F04\"></td><td bgColor=\"#B18904\"></td><td bgColor=\"#AEB404\"></td><td bgColor=\"#86B404\"></td><td bgColor=\"#5FB404\"></td><td bgColor=\"#31B404\"></td><td bgColor=\"#04B404\"></td><td bgColor=\"#04B431\"></td><td bgColor=\"#04B45F\"></td><td bgColor=\"#04B486\"></td><td bgColor=\"#04B4AE\"></td><td bgColor=\"#0489B1\"></td><td bgColor=\"#045FB4\"></td><td bgColor=\"#0431B4\"></td><td bgColor=\"#0404B4\"></td><td bgColor=\"#3104B4\"></td><td bgColor=\"#5F04B4\"></td><td bgColor=\"#8904B1\"></td><td bgColor=\"#B404AE\"></td><td bgColor=\"#B40486\"></td><td bgColor=\"#B4045F\"></td><td bgColor=\"#B40431\"></td><td bgColor=\"#585858\"></td></tr>";
        $box+= "<tr title=\"variação 11\"><td bgColor=\"#8A0808\"></td><td bgColor=\"#8A2908\"></td><td bgColor=\"#8A4B08\"></td><td bgColor=\"#886A08\"></td><td bgColor=\"#868A08\"></td><td bgColor=\"#688A08\"></td><td bgColor=\"#4B8A08\"></td><td bgColor=\"#298A08\"></td><td bgColor=\"#088A08\"></td><td bgColor=\"#088A29\"></td><td bgColor=\"#088A4B\"></td><td bgColor=\"#088A68\"></td><td bgColor=\"#088A85\"></td><td bgColor=\"#086A87\"></td><td bgColor=\"#084B8A\"></td><td bgColor=\"#08298A\"></td><td bgColor=\"#08088A\"></td><td bgColor=\"#29088A\"></td><td bgColor=\"#4B088A\"></td><td bgColor=\"#6A0888\"></td><td bgColor=\"#8A0886\"></td><td bgColor=\"#8A0868\"></td><td bgColor=\"#8A084B\"></td><td bgColor=\"#8A0829\"></td><td bgColor=\"#424242\"></td></tr>";
        $box+= "<tr title=\"variação 12\"><td bgColor=\"#610B0B\"></td><td bgColor=\"#61210B\"></td><td bgColor=\"#61380B\"></td><td bgColor=\"#5F4C0B\"></td><td bgColor=\"#5E610B\"></td><td bgColor=\"#4B610B\"></td><td bgColor=\"#38610B\"></td><td bgColor=\"#21610B\"></td><td bgColor=\"#0B610B\"></td><td bgColor=\"#0B6121\"></td><td bgColor=\"#0B6138\"></td><td bgColor=\"#0B614B\"></td><td bgColor=\"#0B615E\"></td><td bgColor=\"#0B4C5F\"></td><td bgColor=\"#0B3861\"></td><td bgColor=\"#0B2161\"></td><td bgColor=\"#0B0B61\"></td><td bgColor=\"#210B61\"></td><td bgColor=\"#380B61\"></td><td bgColor=\"#4C0B5F\"></td><td bgColor=\"#610B5E\"></td><td bgColor=\"#610B4B\"></td><td bgColor=\"#610B38\"></td><td bgColor=\"#610B21\"></td><td bgColor=\"#2E2E2E\"></td></tr>";
        $box+= "<tr title=\"variação 13\"><td bgColor=\"#3B0B0B\"></td><td bgColor=\"#3B170B\"></td><td bgColor=\"#3B240B\"></td><td bgColor=\"#3A2F0B\"></td><td bgColor=\"#393B0B\"></td><td bgColor=\"#2E3B0B\"></td><td bgColor=\"#243B0B\"></td><td bgColor=\"#173B0B\"></td><td bgColor=\"#0B3B0B\"></td><td bgColor=\"#0B3B17\"></td><td bgColor=\"#0B3B24\"></td><td bgColor=\"#0B3B2E\"></td><td bgColor=\"#0B3B39\"></td><td bgColor=\"#0B2F3A\"></td><td bgColor=\"#0B243B\"></td><td bgColor=\"#0B173B\"></td><td bgColor=\"#0B0B3B\"></td><td bgColor=\"#170B3B\"></td><td bgColor=\"#240B3B\"></td><td bgColor=\"#2F0B3A\"></td><td bgColor=\"#3B0B39\"></td><td bgColor=\"#3B0B2E\"></td><td bgColor=\"#3B0B24\"></td><td bgColor=\"#3B0B17\"></td><td bgColor=\"#1C1C1C\"></td></tr>";
        $box+= "<tr title=\"variação 14\"><td bgColor=\"#2A0A0A\"></td><td bgColor=\"#2A120A\"></td><td bgColor=\"#2A1B0A\"></td><td bgColor=\"#29220A\"></td><td bgColor=\"#292A0A\"></td><td bgColor=\"#222A0A\"></td><td bgColor=\"#1B2A0A\"></td><td bgColor=\"#122A0A\"></td><td bgColor=\"#0A2A0A\"></td><td bgColor=\"#0A2A12\"></td><td bgColor=\"#0A2A1B\"></td><td bgColor=\"#0A2A22\"></td><td bgColor=\"#0A2A29\"></td><td bgColor=\"#0A2229\"></td><td bgColor=\"#0A1B2A\"></td><td bgColor=\"#0A122A\"></td><td bgColor=\"#0A0A2A\"></td><td bgColor=\"#120A2A\"></td><td bgColor=\"#1B0A2A\"></td><td bgColor=\"#220A29\"></td><td bgColor=\"#2A0A29\"></td><td bgColor=\"#2A0A22\"></td><td bgColor=\"#2A0A1B\"></td><td bgColor=\"#2A0A12\"></td><td bgColor=\"#151515\"></td></tr>";
        $box+= "<tr title=\"variação 15\"><td bgColor=\"#190707\"></td><td bgColor=\"#190B07\"></td><td bgColor=\"#191007\"></td><td bgColor=\"#181407\"></td><td bgColor=\"#181907\"></td><td bgColor=\"#141907\"></td><td bgColor=\"#101907\"></td><td bgColor=\"#0B1907\"></td><td bgColor=\"#071907\"></td><td bgColor=\"#07190B\"></td><td bgColor=\"#071910\"></td><td bgColor=\"#071914\"></td><td bgColor=\"#071918\"></td><td bgColor=\"#071418\"></td><td bgColor=\"#071019\"></td><td bgColor=\"#070B19\"></td><td bgColor=\"#070719\"></td><td bgColor=\"#0B0719\"></td><td bgColor=\"#100719\"></td><td bgColor=\"#140718\"></td><td bgColor=\"#190718\"></td><td bgColor=\"#190714\"></td><td bgColor=\"#190710\"></td><td bgColor=\"#19070B\"></td><td bgColor=\"#000000\"></td></tr>";
        $box+= "</table>";


        $("#boxGetColor").html($box);
        
        $('#paletaCor td').mouseenter(function()
        {
            $(this).css('opacity','0.8');
        });

        $('#paletaCor td').mouseleave(function()
        {
            $(this).css('opacity','1');
        });
        
        if($option == false)
        {
            $('#paletaCor tr').children('td').click(function()
            {        
                $_VAR.corSelecionada = $(this).attr('bgColor');
                $("#corSelecionada").css('background-color',$_VAR.corSelecionada);
                $("#textoCor").html($_VAR.corSelecionada);
            });
        }
        else
        {
            $('#paletaCor tr').children('td').click(function()
            {        
                $_VAR.corSelecionada = $(this).attr('bgColor');
                
            if($seletor.tipo == "classe")
            {                
                if($classe == "getColorFundo" || $classe == "getColorTexto" || $classe == "getColorSvg")
                {
                    if($classe == "getColorSvg")
                    {
                        $($t).css('fill',$_VAR.corSelecionada);
                    }
                    else if($classe == "getColorTexto")
                    {
                        $($t).css('color',$_VAR.corSelecionada);
                    }
                    else
                    {
                        $($t).css('background-color',$_VAR.corSelecionada);
                    }
                
                if($retorno.tipo == "html")
                {
                    $("#"+$retorno.id).html($_VAR.corSelecionada);
                }
                else if($retorno.tipo == "val")
                {
                    $("#"+$retorno.id).val($_VAR.corSelecionada);
                }
                else if($retorno.tipo == "append")
                {
                    $("#"+$retorno.id).append($_VAR.corSelecionada);
                }
                else if($retorno.tipo == "prepend")
                {
                    $("#"+$retorno.id).prepend($_VAR.corSelecionada);
                }
                
                $("#boxGetColor").toggle(config.efeitoSaida, config.tempoSaida);
                
                setTimeout(function()
                {
                    $("#boxGetColor").remove();
                }, config.tempoSaida);
                }
                else
                {
                    alert('Nenhuma classe encontrada');
                    $_VAR.corSelecionada = "";
                    $("#boxGetColor").toggle(config.efeitoSaida, config.tempoSaida);
                    setTimeout(function()
                    {
                        $("#boxGetColor").remove();
                    }, config.tempoSaida);
                }
            }
            else if($seletor.tipo == "id")
            {
                if($seletor.css == "icone")
                {
                    $("#"+$id).css('fill',$_VAR.corSelecionada);
                }                
                else if($seletor.css == "texto")
                {
                    $("#"+$id).css('color',$_VAR.corSelecionada);
                }                
                else if($seletor.css == "box")
                {
                    $("#"+$id).css('background-color',$_VAR.corSelecionada);
                }

                if($retorno.tipo == "html")
                {
                    $("#"+$retorno.id).html($_VAR.corSelecionada);
                }
                else if($retorno.tipo == "val")
                {
                    $("#"+$retorno.id).val($_VAR.corSelecionada);
                }
                else if($retorno.tipo == "append")
                {
                    $("#"+$retorno.id).append($_VAR.corSelecionada);
                }
                else if($retorno.tipo == "prepend")
                {
                    $("#"+$retorno.id).prepend($_VAR.corSelecionada);
                }

                $_VAR.corSelecionada = "";
                $("#boxGetColor").toggle(config.efeitoSaida, config.tempoSaida);
                setTimeout(function()
                {
                    $("#boxGetColor").remove();
                }, config.tempoSaida);
            }
            else
            {
                alert('Nenhum id encontrado');
                $_VAR.corSelecionada = "";
                $("#boxGetColor").toggle(config.efeitoSaida, config.tempoSaida);
                setTimeout(function()
                {
                    $("#boxGetColor").remove();
                }, config.tempoSaida);
            }
            });
        }
        
        $('#salvarCor').click(function()
        {
            if($_VAR.corSelecionada == "")
            {
                $('#textoCor').html('Escolha novamente');
                exit;
            }
            
            if($seletor.tipo == "classe")
            {
                if($classe == "getColorFundo" || $classe == "getColorTexto" || $classe == "getColorSvg")
                {
                    if($classe == "getColorSvg")
                    {
                        $("#"+$id).css('fill',$_VAR.corSelecionada);
                    }
                    else if($classe == "getColorTexto")
                    {
                        $("#"+$id).css('color',$_VAR.corSelecionada);
                    }
                    else
                    {
                        $("#"+$id).css('background-color',$_VAR.corSelecionada);
                    }

                    if($retorno.tipo == "html")
                    {
                        $("#"+$retorno.id).html($_VAR.corSelecionada);
                    }
                    else if($retorno.tipo == "val")
                    {
                        $("#"+$retorno.id).val($_VAR.corSelecionada);
                    }
                    else if($retorno.tipo == "append")
                    {
                        $("#"+$retorno.id).append($_VAR.corSelecionada);
                    }
                    else if($retorno.tipo == "prepend")
                    {
                        $("#"+$retorno.id).prepend($_VAR.corSelecionada);
                    }

                    $_VAR.corSelecionada = "";
                    $("#boxGetColor").toggle(config.efeitoSaida, config.tempoSaida);
                    setTimeout(function()
                    {
                        $("#boxGetColor").remove();
                    }, config.tempoSaida);
                }
                else
                {
                    alert('Nenhuma classe encontrada');
                    $_VAR.corSelecionada = "";
                    $("#boxGetColor").toggle(config.efeitoSaida, config.tempoSaida);
                    setTimeout(function()
                    {
                        $("#boxGetColor").remove();
                    }, config.tempoSaida);
                }
            }
            else if($seletor.tipo == "id")
            {
                if($seletor.css == "icone")
                {
                    $("#"+$id).css('fill',$_VAR.corSelecionada);
                }                
                else if($seletor.css == "texto")
                {
                    $("#"+$id).css('color',$_VAR.corSelecionada);
                }                
                else if($seletor.css == "box")
                {
                    $("#"+$id).css('background-color',$_VAR.corSelecionada);
                }

                if($retorno.tipo == "html")
                {
                    $("#"+$retorno.id).html($_VAR.corSelecionada);
                }
                else if($retorno.tipo == "val")
                {
                    $("#"+$retorno.id).val($_VAR.corSelecionada);
                }
                else if($retorno.tipo == "append")
                {
                    $("#"+$retorno.id).append($_VAR.corSelecionada);
                }
                else if($retorno.tipo == "prepend")
                {
                    $("#"+$retorno.id).prepend($_VAR.corSelecionada);
                }

                $_VAR.corSelecionada = "";
                $("#boxGetColor").toggle(config.efeitoSaida, config.tempoSaida);
                setTimeout(function()
                {
                    $("#boxGetColor").remove();
                }, config.tempoSaida);
            }
            else
            {
                alert('Nenhum id encontrado');
                $_VAR.corSelecionada = "";
                $("#boxGetColor").toggle(config.efeitoSaida, config.tempoSaida);
                setTimeout(function()
                {
                    $("#boxGetColor").remove();
                }, config.tempoSaida);
            }
        });

        $("#fecharPaleta").click(function()
        {         
            $("#boxGetColor").toggle(config.efeitoSaida, config.tempoSaida);
            $_VAR.corSelecionada = "";
            setTimeout(function()
            {
                $("#boxGetColor").remove();
            }, config.tempoSaida);
        });
    };

    $propriedades(this, config.css);
    if(config.seletor.tipo == "classe")
    {
        var classe = $separaClasses(this);
    }
       
    $(this).click(function()
    {
        var id = $(this).attr("id");
        $("body").prepend($_VAR.boxGetColor);
        var select = config.selectRapido;
        $monta(this, classe, id, config.retorno, config.seletor, select);
        $("#corSelecionada").css('background-color','#000');
        $("#textoCor").html("Escolha uma cor");
        $("#boxGetColor").toggle(config.efeitoEntrada, config.tempoEntrada);
    });
};

$.fn.getColor.defaults = {
    
    /* captura a cor e fecha a box automaticamente */
    selectRapido   : false,
    
    /* tempo da transição de entrada */
    tempoEntrada   : 500,

    /* tempo da transição de saida */
    tempoSaida     : 250,

    /* tipo animação/efeito de entrada */
    efeitoEntrada  : "fold",

    /* tipo animação/efeito de saida */
    efeitoSaida    : "blind",
    
    /* parâmetros do elemento */
    seletor         : { 
                    /* tipo de seletor do elemento, caso: id ou classe */
                    tipo   : "",
                    /* tipo de retorno para preenchimento, caso: box, texto ou icone */
                    css    : ""
    },
    
    /* parâmetros de retorno do elemento */
    retorno        : {
                     // caminho do retorno
                     id   : "",
        
                     //  tipo de retorno estilo jQuery
                     tipo : ""
    },
    
    /* atributos/propriedades a serem adicionadas ao elemento */
    css            : {
                     cursor : "pointer"
    }
    
};

})(jQuery);