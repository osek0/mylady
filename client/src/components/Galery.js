import React from 'react';
import { getFeed, getPost } from './API/instagram';
import { PhotoCard } from './PhotoCard';
import './styles/Galery.css';

class Galery extends React.Component {

  state = {
    photos: [
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120440659_181337626833103_2100077222813139652_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=oI1O-aRo_qcAX--4PvQ&_nc_ht=scontent-waw1-1.xx&tp=7&oh=323eca02ecf191f266d22881aa2a7390&oe=5F98F6E0',
        description: '💙Welurowa sukienka💙 Rozmiar uniwersalny Polski producent Bardzo dobra jakość'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120449494_181337333499799_3930413715336319229_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=NnGxzY8BGKwAX8zSKbh&_nc_ht=scontent-waw1-1.xx&tp=7&oh=dd10203e21933b948d77a728ec30dbdf&oe=5F9963C0',
        description: '▪️◾▪️Kurtka Neli▪️◾▪️ Polski producent Rozmiary 36,38,40,42,44,46'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120439990_181337046833161_4723923571435749348_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=4bMFXrF9VkMAX9GRTaB&_nc_ht=scontent-waw1-1.xx&tp=7&oh=26fb2f774f25ed4234a307b803a68544&oe=5F98AD68',
        description: '🖤◾🖤Kurtka Cocomore 🖤◾🖤 Rozmiar 36,38,40 Bardzo dobra jakość'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120430531_181335733499959_8910741817968496286_o.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=0w_b1NFJu1cAX-zx9VM&_nc_ht=scontent-waw1-1.xx&tp=7&oh=94f7c1e960099d177299f36af18d14f0&oe=5F99448C',
        description: '🍂🍁🍂🍁🍂🍁🍂🍁🍂🍁🍂 Jesienne nowości'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120406679_181093396857526_8694041879593263780_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=6UQaQCDmRrwAX97rawI&_nc_ht=scontent-waw1-1.xx&tp=7&oh=a150254eddcbad813557860c7ce669f1&oe=5F987D8F',
        description: '🌟Hitowy model spódniczki, tu w kolorze szarym i zestawieniu z cieplutkim sweterkiem🌟'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120415800_181093143524218_2272757882066195863_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=StEo6l_08soAX9fIUma&_nc_ht=scontent-waw1-1.xx&tp=7&oh=f8d407795d28faa2b6d25e370f9bff1f&oe=5F9A18AE',
        description: '💕Sweterki w luźnej firmie, z nadrukiem srebrnym💕 Bardzo dobra jakość Rozmiar uniwersalny'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120367999_181092896857576_8642718557538648042_o.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=wisTzbi8mdgAX9i99lO&_nc_ht=scontent-waw1-1.xx&tp=7&oh=019ffbff607530a0ab8d4bc3d69ed568&oe=5F97BF89',
        description: '💚Sweterek z dekoltem w serek 💚 Bardzo dobra jakość Rozmiar uniwersalny'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120302277_181092476857618_5424761167496387766_o.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=cqgpbnboJ0QAX8bHOq8&_nc_ht=scontent-waw1-1.xx&tp=7&oh=14eb3267ed3e3d16e88402d46966a0b6&oe=5F9730AF',
        description: '🦋Satynowa koszulka wykończona koronką to idealny dodatek pod Sweterki , żakiet czy skajkę🦋  Ponownie dostępna w kilku kolorach. Rozmiar uniwersalny'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120466671_181092136857652_7625181469803220555_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=fUcYi6QiAR4AX-31W8k&_nc_ht=scontent-waw1-1.xx&tp=7&oh=b6e1286996809e22d12dbe4ace682370&oe=5F9831ED',
        description: '🖤❤️Kurtka bomberka w dwóch kolorach🖤❤️ Idealny model na nadchodzące chłodne dni Rozmiar 36,38,40,42'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120305620_180950496871816_6848196486071230259_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=WtYtqg4Zk50AX8Ca_QK&_nc_ht=scontent-waw1-1.xx&tp=7&oh=37a94f9d00a80be272d2617548fa68a3&oe=5F985D52',
        description: '🌸Tiulowa spódniczka Choinka🌸 Idealny model do stylizacji z grubym swetrem🍁'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120411201_180937476873118_7335644327727206770_o.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=-7zOeJkQ-p8AX-b_MPI&_nc_oc=AQmkxMLZgUpt_XlMjAlAMeRc4aSYXHfvI8yzVGuUPexaVnTN2NuBRaozLkRUX9eNIoUOkUKfh1981Fov9E5rye7N&_nc_ht=scontent-waw1-1.xx&tp=7&oh=7a6037ce8080d9124436081ca838507f&oe=5F97F306',
        description: '💙🖤❤️Kurtka Balcinkcega❤️🖤💙 Rozmiar uniwersalny Bardzo dobra jakość'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120301712_180908836875982_1112597555474094248_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=8zaxDVchf-MAX8dA53O&_nc_ht=scontent-waw1-1.xx&tp=7&oh=9fbfd3e9e5e3ed9bc3a09a03c3a8f481&oe=5F985DF0',
        description: '💕Bluza czerwona w kratę. Rozmiar uniwersalny 💕 Bardzo dobra jakość ☎️Iwona 505 178 174'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120302395_180810840219115_4249969392768594635_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=tI8V-Lrt-IcAX-Fqasj&_nc_ht=scontent-waw1-1.xx&tp=7&oh=5c1e6604ec96658a136fe0fcfbe4b3d0&oe=5F99DD45',
        description: '🍁Bluza bawełniana w print kraty🍁 Kolor beż, dostępna w innych kolorach'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120407336_180889143544618_1547460606949585082_o.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=cbpG6b-ed70AX-jsCXw&_nc_ht=scontent-waw1-1.xx&tp=7&oh=ae4865fb801fb5e7a73251a096dc2ba8&oe=5F97D10F',
        description: '🦋Jesienny zestaw🦋Sukienka żorżeta i mięciutki sweterek🍁🍂'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120315247_180810023552530_7653896759211809502_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=hds3CxMRN-QAX_GMHiN&_nc_ht=scontent-waw1-1.xx&tp=7&oh=62dc3c2e22d0c9eb6abea71c06957bb6&oe=5F98A509',
        description: '🦋Karmelowy płaszczyk z paskiem w komplecie🦋 Rozmiar uniwersalny Bardzo dobra jakość Dostępny jeszcze w kolorze czarnym'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120344233_180809600219239_9131466487273839060_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=h5PUw3WIIvQAX8plfp5&_nc_ht=scontent-waw1-1.xx&tp=7&oh=38d2daf68c766ba9f82a86f5e69fc947&oe=5F97F30F',
        description: '🌸Sweterek z nadrukiem🌸 Rozmiar uniwersalny Bardzo dobra jakość Dostępne inne kolory'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120302181_180685926898273_187460490333499902_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=4yIDRaw58UsAX_D_Pub&_nc_ht=scontent-waw1-1.xx&tp=7&oh=222ad024da1265fe2c04a78ec563d9e2&oe=5F99772B',
        description: '🖤Czarny płaszczyk w uniwersalnym rozmiarze🖤 Dostępny jeszcze kolor karmelowy'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120346281_180652410234958_6138196567634587461_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=ygbnJ8k_sigAX-P59fN&_nc_ht=scontent-waw1-1.xx&tp=7&oh=eb7bbbe62d5d3b55ca5684c2c364aeec&oe=5F99B882',
        description: '🦋Bluza w print kraty 🦋Bawełniana bluza w bardzo dobrym gatunku. Rozmiar uniwersalny'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-0/p403x403/120231450_180651986901667_397926234199557399_o.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=QjMVgip441IAX92Z9gp&_nc_ht=scontent-waw1-1.xx&tp=6&oh=4fb181b551f805146de01bbffed6598d&oe=5F991C5F',
        description: '🦋Sukienka żorżeta, w print delikatnych kwiatuszków🦋 Sweter czarny, dostępny w różnych kolorach'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-0/p480x480/120260188_180597753573757_1800440793156935544_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=KbOuKKeMrAMAX9yqUxn&_nc_ht=scontent-waw1-1.xx&tp=6&oh=c78efd457008874a67f36deec35cd251&oe=5F9930C3',
        description: '🕶️🖤🕶️Ostatnie sztuki z modelu 🕶️🖤🕶️ Bardzo fajny model parki dwustronnej.  Kolory czarny i granatowy Rozmiary s-xxl'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-0/p403x403/120187107_180596330240566_8236494993303839958_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=2HLHRLWEuhoAX_Pzjq5&_nc_ht=scontent-waw1-1.xx&tp=6&oh=aa4744e70a04bb007ffa53653f5484e5&oe=5F983B01',
        description: '🖤Spodnie jogery z eko skóry🖤 Rozmiar uniwersalny Zamki po bokach odpinane Bardzo dobra jakość'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120279850_180595216907344_5888245984005047944_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=rIPE4x7jkSwAX9NDSn1&_nc_oc=AQk5Xs7g4g68EQ6ODZO2CyOjOS6FOlvt3wjwFdieZENijdlt8Lfhibsb-qKNV_4JpB4vo_OEo3Jt3BycShEtMHH6&_nc_ht=scontent-waw1-1.xx&tp=7&oh=2c736c1598e3e7970a8316437ceac30e&oe=5F97916F',
        description: '🍁Bluza bawełniana to idealna podpowiedź luźnej stylówki🍁Rozmiar uniwersalny Bardzo dobra jakość'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120324887_180594716907394_8864291943142240956_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=QCmaolPZf98AX88XMoF&_nc_ht=scontent-waw1-1.xx&tp=7&oh=99a29d4ee243c70090753905bafc28e3&oe=5F9800ED',
        description: '🖤💕🖤Hitowy model kurtki jeansowej 🖤💕🖤Kurtka jest w formie pudełka obszycie futerka jest odpinane, rozmiar uni'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120192455_180386153594917_2863495834214948041_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=eTTPxCW6mwwAX9GH8NU&_nc_ht=scontent-waw1-1.xx&tp=7&oh=f1e9d4a53ccee611d66cb6390835f1cf&oe=5F9A209B',
        description: '🍁🍂🍁 Sweterek to idealny dodatek do lekkiej sukienki, szczególnie w chłodne, jesienne dni🍁🍂🍁'
      },
      {
        url: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s720x720/120202817_180378176929048_4249499899490190436_o.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=hqVfAhbbYZ8AX-bK2sF&_nc_oc=AQmkE-C-cgEQ6w06kp4GT6j2sv6rn46cVnNVO_Dka03JfjcMOuGJ-QuVgffxg6KGhqFypdUe_G5Tj1FZjA1aHaxO&_nc_ht=scontent-waw1-1.xx&tp=7&oh=c377ba2a393330a204a1ceeb496ce8f7&oe=5F984C2A',
        description: '🍁🍂 Rewelacyjny model flauszowego płaszczyka🍂🍁Dostępny w kolorze karmel i czarny. Rozmiar uniwersalny, pasek w komplecie'
      },
    ]
  }

  handleClick = async () => {
    const feed = await getFeed();
    const photos = feed.map(async (post) => {
      const postData = await getPost(post.id)
      return ({
        "postID": postData.id,
        "url": postData.media_url,
        "description": postData.caption
      });
    });
    
    await Promise.all(photos)
    .then(posts => {
      this.setState({photos: posts});
    });

    console.log(this.state.photos);
  }

  loadPhotos = () => {
    return this.state.photos.map( photo => {
      return <PhotoCard postID={photo.postID} url={photo.url} description={photo.description} />;
    });
  }

  render() {
    return (
      <div>
        <p>Galery</p>
        <button onClick={this.handleClick}> Click me! </button>
        <div className="photos">
          {this.loadPhotos()}
        </div>
      </div>
    );
  }
}

export default Galery;