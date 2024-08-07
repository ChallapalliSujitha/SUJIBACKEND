import Department from './model/dept';

async function init() {
    const isDev = true;

    await Department.sync({ alter: isDev });
}

const dbInit = () => {
    init();
}

export default dbInit;