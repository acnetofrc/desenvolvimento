let taxa = 0.10;

exports.valor = function( p_valor ) {
    return (p_valor + (p_valor * taxa));

}

exports.descontoDobro = function( p_valor ) {
    return (p_valor - (p_valor * (taxa*2)));

}
