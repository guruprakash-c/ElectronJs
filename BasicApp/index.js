window.addEventListener('offline', () => {
    const alertHtml = GenerateAlert('The application is offline.', 'danger');
    document.getElementById('alerts').innerHTML = alertHtml;
});

window.addEventListener('online', () => {
    const alertHtml = GenerateAlert('The application is online.','success');
    document.getElementById('alerts').innerHTML = alertHtml;
});



const GenerateAlert = (messageText, messageType='primary') => {
    var msgIco = '', msgClass = '';
    switch (messageType) {
        case 'success':
            msgIco = 'check-circle-fill';
            msgClass = 'alert-success';
            break;
        case 'error':
            msgIco = 'x-circle-fill';
            msgClass = 'alert-danger';
            break;
        case 'warning':
            msgIco = 'exclamation-triangle-fill';
            msgClass = 'alert-warning';
            break;
        case 'info':
            msgIco = 'exclamation-diamond-fill';
            msgClass = 'alert-info';
            break;
        default:
            msgIco = 'exclamation-triangle-fill';
            msgClass = 'alert-primary';
            break;
    }
    return `<div class="alert ${msgClass} alert-dismissible fade show" role="alert">
                <i class="bi flex-shrink-0 me-2 bi-${msgIco}"></i> ${messageText} 
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
}