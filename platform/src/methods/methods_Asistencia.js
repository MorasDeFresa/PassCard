const { Asistencias } = require('@/lib/configuration_Sequelize')

const CreateAsistencia = async ({ JsonData }) => {
    const { uuid } = JsonData;
    const fechaLectura = new Date();
    fechaLectura.setHours(fechaLectura.getUTCHours() - 5);

    try {
        const newAsistencia = await Asistencias.create({
            fecha_Asistencias: fechaLectura,
            uuid: uuid
        })
    } catch (error) {

    }
}