const componenteBoton = {
            template: `
                <boton @click="actualizarMensaje">Haz clic aquí</boton>
            `,
            methods: {
                actualizarMensaje() {
                    this.$parent.$refs.componenteMensaje.$emit('mensaje-actualizado', '¡Genial! Has hecho clic en el botón. Acabas de ver una comunicación de componentes.');
                }
            }
        };

        const componenteMensaje = {
            template: `
                <div class="contenedor-mensaje">
                    <p class="mensaje">{{ mensaje }}</p>
                </div>
            `,
            data() {
                return {
                    mensaje: ''
                }
            },
            created() {
                this.$on('mensaje-actualizado', (nuevoMensaje) => {
                    this.mensaje = nuevoMensaje;
                });
            }
        };

        new Vue({
            el: '#contenedor',
            components: {
                'componente-boton': componenteBoton,
                'componente-mensaje': componenteMensaje
            }
 });