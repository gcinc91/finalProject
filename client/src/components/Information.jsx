import React from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const Title = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans");
  @import url("https://fonts.googleapis.com/css?family=Lobster");

  .form_logo {
    font-family: "Lobster", cursive;
    font-size: 40px;
    font-size: 2.5rem;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
  }

  .form_logo span {
    color: #436b95;
  }

  .form_title {
    font-weight: bold;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
  }

  .form_title span {
    color: #436b95;
  }
`;

export default class Information extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="informationGeneral">
          <Title>
            <div className="form_logo">
              <span>K-</span>Transfer
            </div>
          </Title>
          <div className="parrafoExplicacion">
            <p>
              Ktransfer es una web para poder intercambiar conocimientos
              tecnologicos con otros usuarios de la plataforma. Puedes filtrar
              por nombre de usuario o por la tecnologia que quieres aprender
              para poder ponerte en contacto con un usuario para pedirle una
              clase. Solo tienes que meterte en su perfil y rellenar un pequeño
              formulario. El te podra dar la clase a traves de videollamada y
              mas adelante implantaremos la funcionalidad de poder compartir la
              pantalla.
            </p>
          </div>
          <img className='imgInformation' src="https://i1.wp.com/ojulearning.es/wp-content/uploads/2016/05/aula-virtual3-1078x516.jpg?resize=1078%2C480&ssl=1" alt="phto_clase"/>
          <div className="parrafoExplicacion">
          <label className='labelInformation'> A continuacion nuestras condiciones legales</label>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo nisi non erat ultrices, id facilisis mauris ultrices. Suspendisse vitae mollis ante. Phasellus fermentum varius sapien eget tincidunt. Vestibulum enim nibh, venenatis eu venenatis id, sollicitudin ac augue. Morbi lorem diam, fringilla quis suscipit a, pulvinar sed tellus. Sed non convallis leo, non aliquam elit. Aliquam mollis suscipit mi, non lacinia enim euismod in. Sed sed elit dapibus, pulvinar nisi vitae, vulputate eros. In neque purus, laoreet non turpis eu, egestas egestas est.

Curabitur blandit maximus egestas. Phasellus eget dapibus erat. Donec tempor lectus vitae sollicitudin porttitor. Suspendisse sollicitudin fermentum dui, et malesuada ipsum laoreet ac. Etiam ut euismod mi. Suspendisse potenti. Praesent volutpat consequat urna. Suspendisse maximus molestie leo nec hendrerit. Proin tempor sem erat, molestie venenatis enim commodo vel. Nunc vitae pharetra magna. Integer egestas tellus ipsum.

Donec nibh leo, maximus et lorem id, ultrices ullamcorper mauris. Donec aliquam diam vel tristique euismod. Nulla viverra ante dolor, eu feugiat justo iaculis et. Donec lorem diam, dictum eu ante non, vestibulum tempor urna. Cras consectetur magna vitae fringilla tincidunt. Praesent in sodales ex. Pellentesque nec libero molestie, consectetur lacus at, sagittis metus. Aliquam venenatis ipsum tempor nisi mollis maximus. Duis enim erat, vestibulum eget tortor in, faucibus lacinia ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Curabitur suscipit convallis tellus eget hendrerit. Suspendisse potenti. Cras venenatis pulvinar feugiat. Cras posuere turpis ac est elementum viverra. Ut id sem sodales, venenatis est quis, venenatis felis. Nulla vitae malesuada urna. Praesent sed nisi venenatis, aliquet mauris vel, volutpat nibh. Praesent pulvinar maximus nulla eget accumsan. Cras tincidunt aliquam leo, molestie tristique dui iaculis at. Duis iaculis, neque ac dictum consequat, justo tellus vulputate diam, eget pulvinar ante quam sit amet sapien. Duis aliquet elementum commodo. Vestibulum rhoncus sed dui vitae sollicitudin. Aenean dictum, eros non viverra iaculis, ante purus hendrerit mi, sed scelerisque massa nulla at nisl. Aliquam erat volutpat. Donec ut est porttitor, varius leo et, bibendum est.

Vestibulum risus est, tristique ut turpis sed, commodo euismod nunc. Pellentesque pretium blandit orci, elementum congue leo posuere a. Sed egestas, magna tincidunt aliquam tincidunt, lorem ipsum varius sem, vel pharetra mi tellus sit amet orci. Maecenas hendrerit, mauris quis dapibus interdum, odio augue auctor sem, sed tempus est nibh nec magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam auctor tellus vitae libero euismod tempor. Duis placerat eleifend mauris vitae tristique.

Curabitur iaculis tincidunt sollicitudin. Phasellus mattis felis quis finibus feugiat. Maecenas elementum laoreet venenatis. Curabitur quis quam dapibus, efficitur nisl vitae, molestie diam. Maecenas maximus interdum nisl in ullamcorper. Aliquam sem leo, vestibulum vel enim eget, iaculis pharetra odio. Morbi interdum erat quis sapien aliquam accumsan. Vestibulum mollis purus felis, hendrerit imperdiet leo tincidunt non.

Nunc eu pellentesque turpis. Etiam convallis sed lectus id dapibus. Proin nec purus et dolor fringilla ultricies hendrerit sed sem. Duis ipsum diam, lobortis id nisi vel, facilisis scelerisque lectus. Sed sit amet congue odio. Aliquam laoreet nulla risus, vel consequat nunc mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus at leo sit amet iaculis. Nullam iaculis risus vitae sem aliquet tincidunt. Maecenas faucibus diam sed libero congue, accumsan suscipit magna sollicitudin. Aliquam nec elementum diam, et rutrum eros. Maecenas scelerisque maximus semper. Quisque sodales rutrum est id imperdiet. Integer sit amet sem porta dui vehicula ultrices in id augue.

Donec tristique condimentum sollicitudin. Integer velit dolor, feugiat eu elit non, commodo consectetur metus. Suspendisse id tempor mauris. Duis vel velit vestibulum libero tincidunt iaculis. Nulla accumsan bibendum ligula tincidunt lacinia. Duis ligula mi, vehicula ut felis at, bibendum luctus nunc. Integer non tempus ipsum. Nullam ac dictum velit, egestas rutrum est. Nam risus ligula, condimentum bibendum ex non, aliquam viverra nisl. Cras eu eros hendrerit mi eleifend tempus. Donec id purus mattis, facilisis justo sit amet, semper sapien. Praesent libero ligula, tincidunt vel aliquet in, egestas eget orci. Ut cursus enim nisi, ut volutpat nunc elementum vel. Sed maximus ultricies eros vehicula condimentum.

Sed at viverra eros. Suspendisse molestie, risus nec egestas efficitur, ligula velit pulvinar urna, non gravida urna sapien iaculis ante. Maecenas vitae ipsum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna lorem, semper et cursus quis, viverra non odio. Integer vehicula scelerisque est venenatis mattis. Aliquam dignissim non purus et hendrerit. Vestibulum urna metus, pulvinar sit amet blandit ut, ultrices non velit. Duis neque metus, ornare id diam iaculis, placerat cursus tortor. In congue ultrices sapien id tincidunt. Integer purus diam, porttitor lobortis neque in, semper dignissim urna.

Donec eget euismod diam. Praesent efficitur odio sit amet tellus tristique, vitae ullamcorper tortor efficitur. Sed vel massa vitae augue rhoncus consectetur vel non dolor. Proin neque augue, bibendum at nunc a, laoreet dictum tortor. Donec vel tincidunt dui. Donec finibus tellus nunc. Donec non ante vel mi auctor elementum. Pellentesque justo ex, lacinia vitae rutrum nec, venenatis laoreet lectus. Aliquam congue et odio quis feugiat. Suspendisse tincidunt nunc et diam porttitor elementum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
