# prueba-tecnica-frontend

#### Videos de la funcionalidad de la app.
![Mobile](prueba-tecnica/public/assets/prueba-mobile.mp4)

![Navegador](prueba-tecnica/public/assets/prueba-navegador.mp4)

## Estructura del Proyecto

![Estructura](/public/assets/estructura.png)

Este proyecto es una aplicación de tienda en línea construida con **React** e **Ionic**. Permite a los usuarios buscar productos, ver detalles de los productos y gestionar su lista de favoritos. El proyecto sigue patrones de diseño para mejorar la escalabilidad y mantenibilidad del código.

### Descargar el APK
[Descargar APK](https://drive.google.com/file/d/1i7J5ee3NPjOyfQNoQ7mgGyyEoZlvxVCK/view?usp=sharing)
## Instrucciones para instalar la APK

1. Descarga el archivo APK desde el enlace anterior.
2. Conecta tu dispositivo Android al computador mediante un cable USB.
3. Asegúrate de tener [ADB](https://developer.android.com/studio/command-line/adb) instalado y configurado en tu sistema.
4. Abre una terminal y ejecuta el siguiente comando para instalar la APK:

## Patrones de Diseño Implementados

### Contexto (Context Pattern)
- **CartContext** es ejemplo del uso del patrón de diseño **Context**. Este contexto proporcionan un estado global que puede ser compartido a lo largo de la aplicación sin necesidad de realizar prop-drilling (pasar datos entre componentes intermedios). 
- Centralizan la lógica de productos y favoritos, lo que facilita la gestión del estado en toda la aplicación.

### Componente de Presentación (Presentation Pattern)
- Componentes como **ProductList**, **ProductInfoComponent**, **Chekout**, y otros, son ejemplos de componentes de presentación. Estos componentes están diseñados únicamente para la visualización de los datos y no contienen lógica de negocio.
- Los componentes de presentación reciben **props** y se encargan de mostrar la información en la interfaz de usuario sin preocuparse de cómo se obtiene esa información.

### Componente de Contenedor (Container Pattern)
- Componentes como **Home**, **Chekout**, y **ProductInfo** funcionan como contenedores. Estos gestionan la lógica de la aplicación, como la obtención de datos de la API, y pasan los datos necesarios a los componentes de presentación para su visualización.
- Los componentes de contenedor permiten una clara separación de responsabilidades, delegando la lógica de negocio a un nivel superior y manteniendo los componentes de presentación enfocados solo en la UI.

### Lazy Loading (Lazy Load Pattern)
- **React.lazy** se utiliza para implementar **Lazy Loading** en componentes como **Home**, **ProductInfo**, y **Favorite**. 
- Esto mejora el rendimiento de la aplicación, ya que los componentes solo se cargan cuando son necesarios, reduciendo el tiempo de carga inicial y la cantidad de recursos requeridos al inicio.

### Strategy Pattern
- El componente **ImageWithSkeleton** implementa un patrón de estrategia. Dependiendo del estado de carga y de error, decide qué mostrar: una imagen cargada o un "skeleton" (sistema de carga).
- Este patrón permite cambiar el comportamiento (mostrar imagen o skeleton) de manera intercambiable sin afectar el resto del código.

## Buenas Prácticas

- **Separación de responsabilidades**: Cada componente tiene una única responsabilidad. Los componentes de presentación se enfocan en la UI, mientras que los contenedores gestionan la lógica de negocio.
- **Uso de Contextos**: Para compartir estados globales (como productos y favoritos) de manera eficiente y evitar prop-drilling.
- **Carga diferida**: Utilizando **React.lazy** para mejorar el rendimiento de la aplicación cargando solo lo necesario.
- **Patrones de diseño**: Se siguen patrones de diseño como **Context**, **Strategy** y **Observer** para mejorar la mantenibilidad y escalabilidad del código.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/jadodev/prueba-frontend.git
    ```

2. Instala las dependencias:
    ```bash
    pnpm install
    ```

3. Inicia la aplicación:
    ```bash
    pnpm start
    ```

4. Para ejecutar en un dispositivo Android o en un emulador, primero añade la plataforma Android:
    ```bash
    ionic cap add android
    ```

5. Luego sincroniza el proyecto:
    ```bash
    ionic cap sync
    ```

6. Abre el proyecto en Android Studio:
    ```bash
    ionic cap open android
    ```
### Desafio

Uno de los desafíos más grandes que enfrenté durante el desarrollo fue la implementación de **React** **Ionic**, ya que hacía años que no trabajaba con esta tecnología. Además, me encontré con varias herramientas y tecnologías que ya estaban deprecadas, lo que requirió investigar y encontrar soluciones óptimas para asegurar que el proyecto fuera compatible con las versiones actuales.

Otro reto importante fue resolver **conflictos de dependencias**. Esto fue un desafío adicional, pero con un poco de investigación sobre las versiones de las librerías y herramientas utilizadas, pude solucionarlo y seguir adelante con el desarrollo.

## Enfoque y Buenas Prácticas

Este proyecto está diseñado para ser **escalable** y **mantenible**. He seguido buenas prácticas de desarrollo, implementando patrones de diseño que aseguran un código limpio, modular y fácil de expandir.

## Mejoras y Futuro

Aunque la aplicación ya está funcional, hay margen para realizar mejoras. Algunas posibles áreas de mejora incluyen:

- **Escalabilidad**: El diseño está pensado para poder añadir más funcionalidades en el futuro sin comprometer la estructura actual.
- **Mantenimiento**: Se sigue un enfoque modular que permite realizar cambios y actualizaciones de manera sencilla sin afectar otras partes del sistema.
