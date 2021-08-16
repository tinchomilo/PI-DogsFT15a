import React from 'react'
import { shallow } from 'enzyme';

import { Card } from '../../../components/card/Card';

describe('Pruebas en el componente card', () => {

  const name = 'Terry'
  const img = 'https://localhost/imagenTerry.jpg'
  const temperament = ['curious', 'playful']
  const id = '508'

  // inicio los valores afuera del test ya que no los voy a cambiar
  const wrapper = shallow( <Card 
                              name= {name} 
                              img= { img } 
                              temperament= { temperament } 
                              id={ id } /> );

    test('debe mostrar el componente correctamente', () => {

      expect( wrapper).toMatchSnapshot();

    })

    test('debe mostrar un h3 con el nombre', () => {

      const nameH3 = wrapper.find( 'h3' ).text()
      expect( nameH3 ).toBe( name )

    })

    test('debe de mostrar la imagen corectamente', () => {
      
      const imagen = wrapper.find( 'img' )
      expect( imagen.prop( 'src' ) ).toBe( img )

    })

    test('debe de tener la clase card', () => {

      const div = wrapper.find( 'div' )
      // console.log(div.at(0).props()) como hay más de 1 div devuelve un arreglo y por eso tengo que usar el at(0) ya que es el div que quiero evaluar
      // console.log(div.at(0).prop('className'))
      const className = div.at(0).prop( 'className' )

      expect( className.includes( 'card' ) ).toBe( true )

    })
    
  
})
