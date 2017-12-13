const { Person, Backup } = require( './person');

test('Person memento pattern', () => {
  const joao = new Person('Joao do Teste', 'Rua Pirambolas', 'Santos', 'SP' );
  //const maria = new Person('Maria da Silva Sauro', 'Rua Sem Saida', 'Florianopoils', 'SC');

  const backup = new Backup();

  backup.store('joao1', joao.hydrate());

  joao.name = 'Jonas Silva';
  joao.city = 'Sao Paulo';

  expect(joao).toEqual({ name: 'Jonas Silva', street: 'Rua Pirambolas', city: 'Sao Paulo', state: 'SP' });

  joao.dehydrate(backup.restore('joao1'));

  expect(joao).toEqual({ name: 'Joao do Teste', street: 'Rua Pirambolas', city: 'Santos', state: 'SP' });
});