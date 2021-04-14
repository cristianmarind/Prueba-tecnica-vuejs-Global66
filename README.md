# listarfavoritos

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Explicacion de implementacion

### Explicación de implementación

1. Dependencias utilizadas
1.1. vue, vue-router, vuex (stack basico de apps vue)
1.2. bootstrap-vue (para hacer el diseño responsive facilmente, emplear utilidades css y diversos componentes basicos)
1.3 copy-to-clipboard (dependencia para construir fácilmente la funcionalidad de copy-to-clipboard)
1.3 Tipografía Lato

2. Estado de la aplicación
Un sistema esta compuesto básicamente por data y transformaciones a la data, hay dos tipos de data, estática y dinámica: 
2.1. Data estática: Diferentes textos y recursos multimedia que van fijos en las vistas, implementado como un modulo llamado appConfiguration
2.2. Data dinámica: Los diferentes Pokémon y su estado con respecto al usuario (favoritos), inicialmente la app trae el resumen de todos los Pokémon, a medida que el usuario necesita información, el sistema la va adquiriendo, su manipulación se implemento mediante vuex

3. Estilos del sistema
En sistemas web, la personalización es de vital importancia, y esto suele ser algo cambiante, por lo tanto hay una pequeña libreria css personalizada que permea todo el sistema, otorgando estilos estandarizados de botones, index, colores, variables css, etc

4. Comunicación con sistemas externos
Hay un pequeño modulo de app llamado providerServices, el cual tiene la responsabilidad de la comunicación con los sistemas externos, en este caso es muy simple por la complejidad del sistema, en caso de que el sistema tenga diferentes ambientes (desarrollo, production, test, etc) se debería de emplear archivos .env

5. Desarrollo basado en componentes
Vue proporciona un entorno propicio para desarrollar interfaces visuales basadas en componentes, el funcionamiento de esta app es el siguiente:
5.1. El componente pagina: LandingPage presenta la app y ofrece la posibilidad de iniciarla
5.2. El componente pagina: PokemonPreference es el controlador de la app, utiliza el store para su funcionamiento (mapState, dispatch, commit), el filtro lo implemente mediante vue computed