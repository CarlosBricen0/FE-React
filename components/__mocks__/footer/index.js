export const dataTopFooter = Array.from(Array(3).keys()).map(key => {
  return {
    id: key + 1,
    description: 'Aquí encontrarás preguntas frecuentes y mucho más',
    icon: 'MessageQuestion',
    label: 'Centro de ayuda',
    link: 'https://centrodeayuda.unimarc.cl/hc/es-419',
    title: 'Centro de ayuda'
  }
})

export const dataMain = Array.from(Array(3).keys()).map(() => {
  const entries = Array.from(Array(8).keys()).map(() => {
    return {
      label: 'Canal de denuncias',
      link: 'https://lineaetica.ines.cl/lineaetica/formulario/unimarc/',
      title: 'Canal de denuncias'
    }
  })

  return {
    contentType: 'middleFooterItem',
    entries,
    label: 'Nuestra empresa'
  }
})

export const dataLinks = [
  ...dataMain,
  {
    contentType: 'middleFooterItem',
    entries: [{
      description: 'Llámanos de 9:00 a 20:00 hrs',
      icon: 'Phone',
      label: 'Unimarc - Servicio al cliente',
      link: '6006000025',
      subTitle: '600 600 0025',
      title: 'Unimarc - Servicio al cliente'
    }, {
      description: 'Llámanos de 8:00 a 00:00 hrs',
      icon: 'Phone',
      label: 'Tarjeta Unimarc - Servicio al cliente',
      link: '6003909000',
      subTitle: '600 390 9000',
      title: 'Tarjeta Unimarc - Servicio al cliente'
    }, {
      icon: 'SmsEdit',
      label: 'Compras online',
      link: 'https://centrodeayuda.unimarc.cl/hc/es-419/requests/new ',
      secondIcon: 'Message',
      secondTitle: 'despachosunimarc@unimarc.cl',
      subTitle: 'Crear una solicitud',
      title: 'Compras online'
    }, {
      icon: 'SmsEdit',
      label: 'Compras en tienda',
      link: 'https://centrodeayuda.unimarc.cl/hc/es-419/requests/new ',
      secondIcon: 'Message',
      secondTitle: 'contacto.unimarc@unimarc.cl',
      subTitle: 'Crear una solicitud',
      title: 'Compras en tienda'
    }],
    label: 'Contáctanos'
  }
]