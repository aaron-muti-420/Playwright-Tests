export const CONFIG = {
    baseUrl: 'https://bw-niss.stg-k8s.bwstg.local',
    // Dev baseUrl: 'https://bw-niss.dev-k8s.bdv.local',
    credentials: {
        username: 'niss_superuser_test',
        password: 'Bdvoct@2025'
    },
    testData: {
        accountNumber: '8003842838',
        customerInfo: {
            name: 'Test Trading',
            regNumber: '45782',
            address: 'Windhoek Ola House',
            city: 'Windhoek'
        },
        payment: {
            amount: '400',
            details: 'Test Payment',
            bank: 'Absa Bank Limited',
            chargeType: 'SHAR'
        }
    }
};