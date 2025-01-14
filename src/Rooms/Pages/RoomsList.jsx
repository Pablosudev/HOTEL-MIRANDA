import React from "react"


export const RoomsList = () => {


    return (
        <section>
            <h2>Tabla de Habitaciones</h2>
            <table>
        <thead>
            <tr>
                <th>Foto</th>
                <th>Número de Habitación</th>
                <th>ID de Habitación</th>
                <th>Tipo de Habitación</th>
                <th>Servicios Incluidos</th>
                <th>Precio Regular</th>
                <th>Precio Oferta</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td>101</td>
                <td>H001</td>
                <td>Individual</td>
                <td>Wi-Fi, Aire Acondicionado</td>
                <td>$100</td>
                <td>$80</td>
                <td>Disponible</td>
            </tr>
            <tr>
                <td></td>
                <td>102</td>
                <td>H002</td>
                <td>Double</td>
                <td>Wi-Fi, TV por cable</td>
                <td>$150</td>
                <td>$120</td>
                <td>Reservada</td>
            </tr>
            <tr>
                <td></td>
                <td>103</td>
                <td>H003</td>
                <td>Suite</td>
                <td>Wi-Fi, Jacuzzi, Desayuno incluido</td>
                <td>$250</td>
                <td>$200</td>
                <td>Disponible</td>
            </tr>
        </tbody>
            </table>    

        </section>
    )
    
}