function startSite(){
    const color = localStorage.getItem('color');
    const mode = localStorage.getItem('mode');
    const body = $('body');

    color != null ? body.attr('data-color', color) : body.attr('data-color','purple');

    mode != null ? body.attr('data-mode', mode) : body.attr('data-mode','night');

    mode == 'day' ? $('#cbx').prop('checked', true) : $('#cbx').prop('checked', false);
};