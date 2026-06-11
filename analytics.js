(async () => {
    const API = 'https://mhnvnh6pr6.execute-api.us-east-1.amazonaws.com';
    const key = 'visitLogged:' + location.pathname;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, '1');
    try {
        const { ip } = await (await fetch('https://api.ipify.org?format=json')).json();
        await fetch(API + '/log-access', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ip,
                success: true,
                userAgent: navigator.userAgent + ' | path=' + location.pathname
            })
        });
    } catch (_) { }
})();
