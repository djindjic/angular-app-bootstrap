import {Ticket, System, Node} from './ticket';

const delta = 0.0001;
describe('Ticket calucation', function() {
  let system1;
  let system2;

  beforeEach(function() {
    system1 = new System();
    system1.addNode(new Node(1, 2, 3.2));
    system1.addNode(new Node(4, 1, 1.2));
    system1.addNode(new Node(6, 2, 2.2));

    system2 = new System();
    system2.addNode(new Node(8, 1, 1.2));
    system2.addNode(new Node(6, 2, 4.2));
  });

  describe('Ticket', function() {
    let ticket1;

    beforeEach(function() {
      ticket1 = new Ticket();
      ticket1.addSystem(system1);
      ticket1.addSystem(system2);
    });

    it('should add  system  ticket', function() {
      let system = new System();
      let ticket = new Ticket();
      ticket.addSystem(system);
      expect(ticket.systems.length).to.equal(1);
    });

    it('should calculate ticket', function() {
      expect(Math.abs(ticket1.calculate() - (3.2 * 1.2 * 2.2 * 1.2 * 4.2))).to.be.below(delta);
    });

    it('should fail if ticket conteins more then one unique events', function() {
      expect(ticket1.validateEvents()).to.equal(true);
    });
  });

  describe('System', function() {
    it('should add node to system', function() {
      let node = new Node(1, 2, 1.4);
      let system = new System();
      system.addNode(node);
      expect(system.nodes.length).to.equal(1);
    });
    it('should calculate system', function() {
      expect(Math.abs(system1.calculate() - (3.2 * 1.2 * 2.2))).to.be.below(delta);
    });
  });

});
