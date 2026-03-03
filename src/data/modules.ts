import type { Module } from './types'
import { code, quiz, playground, callout, diag, badgood } from './helpers'

export const MODULES: Module[] = [
{id:'fundamentos',title:'Fundamentos',emoji:'🗺️',color:'#60A5FA',level:'i',
 sections:[
  {id:'o-que-e',title:'O que é Arquitetura?',level:'i',content:`
<div class="ph"><div class="pic">🏗️</div><div class="pm">
<div class="pcat">Módulo 1 · Fundamentos</div>
<div class="pname">O que é Arquitetura de Software?</div>
<div class="pint">A base que sustenta tudo — antes de patterns, antes de frameworks, antes de código.</div>
</div></div>
<p class="lead">Arquitetura de software é o conjunto de <strong>decisões estruturais</strong> que moldam como um sistema é organizado, como seus componentes se comunicam e quais trade-offs são aceitos conscientemente.</p>
${callout('🎯','<strong>Definição prática:</strong> Arquitetura é o que define o que é difícil de mudar depois. Se você pode mudar sem dor, é um detalhe de implementação. Se custa caro mudar, é arquitetura.','info')}
<h2>Por que arquitetura importa?</h2>
<p>A maioria dos sistemas começa simples. Com o tempo, cresce a pressão por features, por usuários, por times maiores. Sem arquitetura pensada, o custo de cada mudança cresce exponencialmente — o que chamamos de <em>degradação arquitetural</em>.</p>
<div class="card-row">
  <div class="card card-bad"><div class="card-hd">✗ Sem arquitetura</div><p>Cada feature nova exige entender (e tocar) metade do sistema. Bugs em um lugar surgem em outro.</p></div>
  <div class="card card-good"><div class="card-hd">✓ Com arquitetura</div><p>Mudanças ficam isoladas. Times trabalham em paralelo. Novos membros entendem o sistema rapidamente.</p></div>
</div>
<h2>As três forças fundamentais</h2>
<p>Todo sistema arquitetural lida com três forças em tensão permanente:</p>
<table><tr><th>Força</th><th>O que é</th><th>Impacto</th></tr>
<tr><td><strong>Complexidade</strong></td><td>Complexidade essencial (do domínio) vs acidental (criamos nós mesmos)</td><td>Gerenciar é o trabalho central da arquitetura</td></tr>
<tr><td><strong>Mudança</strong></td><td>O sistema vai mudar — os requisitos, o time, o contexto</td><td>Arquitetura boa abraça mudança, não resiste a ela</td></tr>
<tr><td><strong>Qualidade</strong></td><td>Performance, segurança, manutenibilidade, disponibilidade</td><td>Cada atributo tem custo — todo trade-off é explícito</td></tr>
</table>
<h2>Dívida Técnica</h2>
<p>Dívida técnica é o custo implícito de soluções rápidas e incompletas. Como dívida financeira, ela <strong>acumula juros</strong>: quanto mais tempo sem pagar, mais caro fica.</p>
${callout('⚠️','Dívida técnica não é sempre ruim. Assumir dívida conscientemente (e planejar pagá-la) pode ser uma decisão arquitetural válida. O problema é a dívida <strong>acidental</strong> — criada sem perceber.','warning')}
${quiz('Qual afirmação melhor descreve a diferença entre arquitetura e detalhe de implementação?',
['Arquitetura é o que fica no diagrama, implementação é o que fica no código',
'Arquitetura abrange decisões de alto custo para mudar; implementação abrange o que pode ser alterado sem impacto estrutural',
'Arquitetura é responsabilidade do arquiteto sênior; implementação é do dev',
'Arquitetura é sobre infraestrutura; implementação é sobre aplicação'],1,
'✅ A distinção chave é o custo de mudança. Arquitetura são as decisões que, se erradas, custam caro para reverter — estrutura de módulos, dependências entre camadas, protocolos de comunicação.')}
`},
{id:'qualidade',title:'Atributos de Qualidade',level:'i',content:`
<h1>Atributos de Qualidade</h1>
<p class="lead">Não basta o sistema funcionar. A arquitetura define <em>como</em> ele vai funcionar — e para quais dimensões de qualidade ele estará otimizado.</p>
<h2>FURPS+</h2>
<table><tr><th>Atributo</th><th>Perguntas-chave</th></tr>
<tr><td><strong>F</strong>unctionality</td><td>O sistema faz o que deve fazer? Segurança? Interoperabilidade?</td></tr>
<tr><td><strong>U</strong>sability</td><td>O usuário consegue usar sem frustração? Curva de aprendizado?</td></tr>
<tr><td><strong>R</strong>eliability</td><td>Frequência de falhas? Recovery time? Disponibilidade?</td></tr>
<tr><td><strong>P</strong>erformance</td><td>Tempo de resposta? Throughput? Uso de recursos?</td></tr>
<tr><td><strong>S</strong>upportability</td><td>Facilidade de manutenção, teste, extensão e deployment?</td></tr>
<tr><td><strong>+</strong> (extras)</td><td>Implementação, interface, operações, legais</td></tr>
</table>
<h2>Trade-offs inevitáveis</h2>
${callout('⚖️','Você <strong>não pode maximizar todos os atributos</strong> ao mesmo tempo. Cada decisão arquitetural é um trade-off. Seu trabalho é torná-los explícitos e conscientes.','warning')}
<table><tr><th>Ganho</th><th>Custo típico</th></tr>
<tr><td>Alta disponibilidade</td><td>Maior complexidade operacional e custo</td></tr>
<tr><td>Alta performance</td><td>Menor manutenibilidade (otimizações obscurecem código)</td></tr>
<tr><td>Alta segurança</td><td>Menor usabilidade e performance</td></tr>
<tr><td>Alta escalabilidade</td><td>Consistência eventual, complexidade de dados</td></tr>
<tr><td>Alta flexibilidade</td><td>Maior complexidade inicial, abstrações custosas</td></tr>
</table>
${quiz('Um sistema bancário precisa escolher entre consistência forte e alta disponibilidade. O CAP theorem diz que, em presença de partição de rede, é impossível ter as duas. Qual é a escolha arquiteturalmente correta?',
['Sempre priorizar disponibilidade — banco não pode cair',
'Sempre priorizar consistência — dados bancários não podem estar errados',
'Depende do contexto: transferências críticas exigem consistência; consulta de saldo pode tolerar eventual consistency',
'O CAP theorem não se aplica a sistemas bancários modernos'],2,
'✅ A resposta correta é: depende. Sistemas modernos como o Nubank usam consistência eventual para leituras e consistência forte para escritas críticas — é uma decisão arquitetural deliberada por operação.')}
`}
]},

{id:'solid',title:'SOLID',emoji:'📐',color:'#D4A017',level:'m',
 sections:[
  {id:'srp',title:'S — Single Responsibility',level:'i',content:`
<div class="ph"><div class="pic">☝️</div><div class="pm">
<div class="pcat">SOLID · Princípio 1/5</div>
<div class="pname">Single Responsibility Principle</div>
<div class="pint">Uma classe deve ter apenas um motivo para mudar.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição</div><div class="pbox-def">"Uma classe deve ter apenas <strong>um motivo para mudar</strong>." — Robert C. Martin</div></div>
<p>Na prática: cada módulo/classe/função é responsável por <em>um único ator</em> — uma pessoa, papel ou sistema que pode pedir mudanças nele.</p>
<h2>O problema: God Class</h2>
<p>Quando uma classe acumula responsabilidades de múltiplos atores, qualquer mudança para um pode quebrar o outro — e a classe vira um ponto central de conflito.</p>
${code(`// ✗ RUIM — UserService faz tudo
class UserService {
  constructor(private db: Database, private mailer: Mailer) {}

  // Responsabilidade 1: regras de negócio
  register(email: string, password: string) {
    if (!email.includes('@')) throw new Error('Email inválido');
    const hash = bcrypt.hash(password);
    this.db.save({ email, password: hash });
    // Responsabilidade 2: envio de email
    this.mailer.send(email, 'Bem-vindo!');
    // Responsabilidade 3: log/auditoria
    console.log(\`[AUDIT] User registered: \${email}\`);
  }
}`,
`# ✗ RUIM
class UserService:
    def register(self, email, password):
        if '@' not in email: raise ValueError('Invalid email')
        self.db.save({'email': email, 'pass': hash(password)})
        self.mailer.send(email, 'Welcome!')
        print(f'[AUDIT] User: {email}')`,
`// ✗ RUIM
class UserService {
    void register(String email, String password) {
        if (!email.contains("@")) throw new RuntimeException("Invalid");
        db.save(email, BCrypt.hash(password));
        mailer.send(email, "Welcome!");
        System.out.println("[AUDIT] User: " + email);
    }
}`)}
${code(`// ✓ BOM — cada classe tem uma responsabilidade
class UserRegistrar {
  constructor(private repo: UserRepository) {}
  register(email: string, password: string): User {
    if (!email.includes('@')) throw new Error('Email inválido');
    return this.repo.save({ email, password: hash(password) });
  }
}

class WelcomeEmailSender {
  constructor(private mailer: Mailer) {}
  sendWelcome(email: string) {
    this.mailer.send(email, 'Bem-vindo!');
  }
}

class AuditLogger {
  log(event: string) { console.log(\`[AUDIT] \${event}\`); }
}

// Orquestração na camada de aplicação
class RegisterUserUseCase {
  constructor(
    private registrar: UserRegistrar,
    private emailSender: WelcomeEmailSender,
    private audit: AuditLogger
  ) {}

  execute(email: string, password: string) {
    const user = this.registrar.register(email, password);
    this.emailSender.sendWelcome(email);
    this.audit.log(\`User registered: \${email}\`);
    return user;
  }
}`,
`# ✓ BOM
class UserRegistrar:
    def register(self, email, password): ...

class WelcomeEmailSender:
    def send_welcome(self, email): ...

class AuditLogger:
    def log(self, event): ...

class RegisterUserUseCase:
    def execute(self, email, password):
        user = self.registrar.register(email, password)
        self.email_sender.send_welcome(email)
        self.audit.log(f'User registered: {email}')
        return user`,
`// ✓ BOM
class UserRegistrar { User register(String email, String pw) {...} }
class WelcomeEmailSender { void sendWelcome(String email) {...} }
class AuditLogger { void log(String event) {...} }`)}
${quiz('Qual sinal indica que uma classe está violando o SRP?',
['Ela tem mais de 100 linhas de código',
'Ela importa mais de 5 dependências',
'Você consegue descrever o que ela faz usando "e também" — ela registra usuários E envia email E loga',
'Ela tem mais de um método público'],2,
'✅ O "e também" é o indicador clássico de múltiplas responsabilidades. Se a descrição da classe precisa de conjunções, ela provavelmente tem mais de uma razão para mudar.')}
`},
{id:'ocp',title:'O — Open/Closed',level:'m',content:`
<div class="ph"><div class="pic">🔓</div><div class="pm">
<div class="pcat">SOLID · Princípio 2/5</div>
<div class="pname">Open/Closed Principle</div>
<div class="pint">Aberto para extensão, fechado para modificação.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição</div><div class="pbox-def">Entidades de software devem ser <strong>abertas para extensão</strong>, mas <strong>fechadas para modificação</strong>. — Bertrand Meyer / Robert C. Martin</div></div>
<p>Na prática: você deve conseguir adicionar comportamento novo sem alterar código existente. Alterações em código existente são perigosas — podem quebrar comportamentos que já funcionam.</p>
<h2>O problema: switch/if em cascata</h2>
${code(`// ✗ RUIM — cada novo tipo de desconto exige modificar esta função
function calcularDesconto(tipo: string, valor: number): number {
  if (tipo === 'estudante') return valor * 0.8;
  if (tipo === 'senior') return valor * 0.7;
  if (tipo === 'vip') return valor * 0.5;
  // Para adicionar 'funcionario', precisamos modificar aqui ↑
  return valor;
}`,
`def calcular_desconto(tipo, valor):
    if tipo == 'estudante': return valor * 0.8
    if tipo == 'senior': return valor * 0.7
    # Cada novo tipo → modifica aqui
    return valor`,
null)}
${code(`// ✓ BOM — Strategy + polimorfismo
interface DescontoStrategy {
  calcular(valor: number): number;
}

class DescontoEstudante implements DescontoStrategy {
  calcular(valor: number) { return valor * 0.8; }
}
class DescontoSenior implements DescontoStrategy {
  calcular(valor: number) { return valor * 0.7; }
}
class DescontoVIP implements DescontoStrategy {
  calcular(valor: number) { return valor * 0.5; }
}
// Novo tipo? Só criar nova classe — sem tocar no existente
class DescontoFuncionario implements DescontoStrategy {
  calcular(valor: number) { return valor * 0.6; }
}

class Carrinho {
  calcularTotal(itens: Item[], desconto: DescontoStrategy): number {
    const subtotal = itens.reduce((s, i) => s + i.preco, 0);
    return desconto.calcular(subtotal);
  }
}`,
`from abc import ABC, abstractmethod

class DescontoStrategy(ABC):
    @abstractmethod
    def calcular(self, valor: float) -> float: ...

class DescontoEstudante(DescontoStrategy):
    def calcular(self, valor): return valor * 0.8

class DescontoSenior(DescontoStrategy):
    def calcular(self, valor): return valor * 0.7

# Adicionar novo tipo: só nova classe, zero modificação`,null)}
${quiz('Por que o OCP reduz riscos em produção?',
['Porque impede a criação de código duplicado',
'Porque código existente (testado, em produção) não é modificado ao adicionar features — apenas novas classes são criadas',
'Porque torna o código mais fácil de ler',
'Porque elimina a necessidade de testes'],1,
'✅ O OCP protege código que já funciona. Ao estender via novas classes em vez de modificar as existentes, o risco de regressão cai drasticamente — o código testado e validado fica intocado.')}
`},
{id:'lsp',title:'L — Liskov Substitution',level:'m',content:`
<div class="ph"><div class="pic">🔄</div><div class="pm">
<div class="pcat">SOLID · Princípio 3/5</div>
<div class="pname">Liskov Substitution Principle</div>
<div class="pint">Subtipos devem ser substituíveis por seus tipos base.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição</div><div class="pbox-def">Se <code>S</code> é subtipo de <code>T</code>, objetos do tipo <code>T</code> podem ser substituídos por <code>S</code> <strong>sem alterar o comportamento correto do programa</strong>. — Barbara Liskov, 1987</div></div>
<p>Na prática: herança não é sobre reusar código — é sobre contrato comportamental. A subclasse deve honrar todas as garantias da classe pai.</p>
${code(`// ✗ RUIM — o clássico "Retângulo/Quadrado"
class Retangulo {
  largura = 0; altura = 0;
  setLargura(l: number) { this.largura = l; }
  setAltura(a: number) { this.altura = a; }
  area() { return this.largura * this.altura; }
}

class Quadrado extends Retangulo {
  // Viola LSP: alterar largura também altera altura — quebra expectativa
  setLargura(l: number) { this.largura = l; this.altura = l; }
  setAltura(a: number) { this.largura = a; this.altura = a; }
}

function testar(r: Retangulo) {
  r.setLargura(5); r.setAltura(10);
  // Para Retangulo: area = 50 ✓
  // Para Quadrado: area = 100 ✗ — comportamento inesperado!
  console.log(r.area());
}`,
`# ✗ RUIM
class Retangulo:
    def set_largura(self, l): self.largura = l
    def set_altura(self, a): self.altura = a

class Quadrado(Retangulo):  # Viola LSP
    def set_largura(self, l):
        self.largura = self.altura = l  # Efeito colateral inesperado`,null)}
${code(`// ✓ BOM — composição e interface comum sem herança forçada
interface Forma {
  area(): number;
}

class Retangulo implements Forma {
  constructor(private l: number, private a: number) {}
  area() { return this.l * this.a; }
}

class Quadrado implements Forma {
  constructor(private lado: number) {}
  area() { return this.lado ** 2; }
}

// Qualquer Forma pode ser usada onde Forma é esperado — LSP respeitado
function exibirArea(f: Forma) {
  console.log('Área:', f.area());
}`,
`# ✓ BOM
from abc import ABC, abstractmethod

class Forma(ABC):
    @abstractmethod
    def area(self) -> float: ...

class Retangulo(Forma):
    def __init__(self, l, a): self.l, self.a = l, a
    def area(self): return self.l * self.a

class Quadrado(Forma):
    def __init__(self, lado): self.lado = lado
    def area(self): return self.lado ** 2`,null)}
${quiz('Qual é o sinal mais claro de violação do LSP?',
['A subclasse tem mais métodos que a classe pai',
'Código que usa a classe pai precisa checar com instanceof/typeof antes de chamar um método',
'A subclasse não chama super() no construtor',
'A herança vai mais de dois níveis'],1,
'✅ Ter que verificar o tipo concreto em tempo de execução (instanceof) é o sintoma clássico de LSP violado. Se você precisar de if (obj instanceof Quadrado) para tratar diferente, o polimorfismo está quebrado.')}
`},
{id:'isp',title:'I — Interface Segregation',level:'m',content:`
<div class="ph"><div class="pic">✂️</div><div class="pm">
<div class="pcat">SOLID · Princípio 4/5</div>
<div class="pname">Interface Segregation Principle</div>
<div class="pint">Nenhum cliente deve depender de métodos que não usa.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição</div><div class="pbox-def">Clientes não devem ser forçados a depender de interfaces que não utilizam. Interfaces gordas devem ser separadas em interfaces menores e focadas. — Robert C. Martin</div></div>
${code(`// ✗ RUIM — interface gorda
interface Trabalhador {
  trabalhar(): void;
  comer(): void;      // Robôs não comem!
  dormir(): void;     // Robôs não dormem!
  tirarFerias(): void;
}

class Robo implements Trabalhador {
  trabalhar() { console.log('beep boop'); }
  comer() { throw new Error('Robô não come!'); }       // Força método inútil
  dormir() { throw new Error('Robô não dorme!'); }     // Força método inútil
  tirarFerias() { throw new Error('Robô não tira férias!'); }
}`,
`# ✗ RUIM
class Trabalhador(ABC):
    @abstractmethod
    def trabalhar(self): ...
    @abstractmethod
    def comer(self): ...    # Robô não come
    @abstractmethod
    def dormir(self): ...   # Robô não dorme`,null)}
${code(`// ✓ BOM — interfaces segregadas e focadas
interface Trabalhavel { trabalhar(): void; }
interface Alimentavel { comer(): void; }
interface Descansavel { dormir(): void; tirarFerias(): void; }

// Humano implementa tudo
class Humano implements Trabalhavel, Alimentavel, Descansavel {
  trabalhar() { console.log('trabalhando...'); }
  comer() { console.log('almoçando...'); }
  dormir() { console.log('zzz...'); }
  tirarFerias() { console.log('na praia!'); }
}

// Robô só implementa o que faz sentido
class Robo implements Trabalhavel {
  trabalhar() { console.log('beep boop'); }
}`,
`# ✓ BOM
class Trabalhavel(ABC):
    @abstractmethod
    def trabalhar(self): ...

class Alimentavel(ABC):
    @abstractmethod
    def comer(self): ...

class Humano(Trabalhavel, Alimentavel):
    def trabalhar(self): print('trabalhando')
    def comer(self): print('comendo')

class Robo(Trabalhavel):
    def trabalhar(self): print('beep boop')`,null)}
${quiz('Qual o principal benefício do ISP na prática?',
['Reduz o número total de interfaces no sistema',
'Módulos só dependem do que realmente precisam — mudanças em funcionalidades não usadas não causam recompilação ou quebra',
'Torna o código mais fácil de testar por reduzir mock',
'Elimina a necessidade de herança'],1,
'✅ O benefício real é o isolamento: se UserRepository não usa métodos de backup, mudanças no contrato de backup não forçam UserRepository a ser atualizado. Isso reduz acoplamento e o impacto de mudanças.')}
`},
{id:'dip',title:'D — Dependency Inversion',level:'m',content:`
<div class="ph"><div class="pic">🔃</div><div class="pm">
<div class="pcat">SOLID · Princípio 5/5</div>
<div class="pname">Dependency Inversion Principle</div>
<div class="pint">Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição</div><div class="pbox-def">1. Módulos de alto nível não devem depender de módulos de baixo nível — ambos devem depender de abstrações.<br>2. Abstrações não devem depender de detalhes — detalhes devem depender de abstrações. — Robert C. Martin</div></div>
${callout('💡','DIP é o princípio por trás de todo sistema de <strong>Injeção de Dependência (DI)</strong>. Frameworks como NestJS, Spring, e Angular são construídos sobre ele.','info')}
${code(`// ✗ RUIM — alto nível (OrderService) depende de baixo nível (MySQLDatabase)
class MySQLDatabase {
  save(data: any) { /* mysql query */ }
}

class OrderService {
  private db = new MySQLDatabase(); // Acoplamento direto!

  createOrder(order: Order) {
    this.db.save(order); // OrderService sabe que existe MySQL
  }
}`,
`# ✗ RUIM
class MySQLDatabase:
    def save(self, data): pass  # mysql

class OrderService:
    def __init__(self):
        self.db = MySQLDatabase()  # Acoplamento direto

    def create_order(self, order):
        self.db.save(order)`,null)}
${code(`// ✓ BOM — ambos dependem da abstração (interface)
interface OrderRepository {
  save(order: Order): Promise<void>;
}

// Alto nível depende de abstração
class OrderService {
  constructor(private repo: OrderRepository) {} // DI via construtor

  async createOrder(order: Order) {
    await this.repo.save(order);
  }
}

// Detalhes dependem de abstração
class MySQLOrderRepository implements OrderRepository {
  async save(order: Order) { /* mysql query */ }
}

class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];
  async save(order: Order) { this.orders.push(order); }
}

// Produção:
const service = new OrderService(new MySQLOrderRepository());
// Testes:
const serviceTest = new OrderService(new InMemoryOrderRepository());`,
`# ✓ BOM
from abc import ABC, abstractmethod

class OrderRepository(ABC):
    @abstractmethod
    async def save(self, order): ...

class OrderService:
    def __init__(self, repo: OrderRepository):
        self.repo = repo  # DI via construtor

class MySQLOrderRepository(OrderRepository):
    async def save(self, order): ...  # detalhes do MySQL

class InMemoryOrderRepository(OrderRepository):
    def __init__(self): self.orders = []
    async def save(self, order): self.orders.append(order)`,null)}
${quiz('Qual é a relação entre DIP e testabilidade?',
['Nenhuma — testes são uma preocupação separada',
'DIP torna o código mais difícil de testar por adicionar mais abstrações',
'DIP permite substituir implementações reais por mocks/stubs, tornando testes unitários possíveis sem infraestrutura',
'DIP só beneficia testes de integração'],2,
'✅ Exatamente. Com DIP, você pode injetar um InMemoryRepository no lugar de um MySQL durante testes — sem banco de dados, sem rede, sem configuração. Isso é o que torna o TDD viável em sistemas reais.')}
`}
]},

{id:'principios',title:'Outros Princípios',emoji:'⚖️',color:'#4ADE80',level:'i',
 sections:[
  {id:'dry',title:'DRY',level:'i',content:`
<div class="ph"><div class="pic">🌵</div><div class="pm">
<div class="pcat">Princípios · Design</div>
<div class="pname">DRY — Don't Repeat Yourself</div>
<div class="pint">Cada pedaço de conhecimento deve ter uma representação única, inequívoca e autoritativa no sistema.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição Original</div><div class="pbox-def">"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system." — The Pragmatic Programmer</div></div>
${callout('⚠️','DRY não é sobre código duplicado em si — é sobre <strong>conhecimento duplicado</strong>. Duas funções com código similar que representam regras de negócio diferentes <em>não devem</em> ser unificadas. Unificar por acidente cria acoplamento desnecessário.','warning')}
<h2>WET: a violação</h2>
<p><strong>WET</strong> = "Write Everything Twice" (ou "We Enjoy Typing"). O sinal é: você muda uma regra em um lugar e precisa lembrar de mudar em 5 outros.</p>
${code(`// ✗ RUIM — validação de email duplicada em 3 lugares
class UserController {
  register(dto: RegisterDto) {
    if (!dto.email.includes('@') || dto.email.length < 5)
      throw new Error('Email inválido'); // regra aqui
    // ...
  }
  updateEmail(dto: UpdateEmailDto) {
    if (!dto.email.includes('@') || dto.email.length < 5)
      throw new Error('Email inválido'); // mesma regra aqui
    // ...
  }
}
class AdminController {
  createUser(dto: CreateUserDto) {
    if (!dto.email.includes('@') || dto.email.length < 5)
      throw new Error('Email inválido'); // e aqui também
  }
}`,
`# ✗ WET
def registrar(email):
    if '@' not in email or len(email) < 5:
        raise ValueError('Email inválido')  # duplicado

def atualizar_email(email):
    if '@' not in email or len(email) < 5:  # mesma regra
        raise ValueError('Email inválido')`,null)}
${code(`// ✓ BOM — conhecimento centralizado
function isEmailValido(email: string): boolean {
  return email.includes('@') && email.length >= 5;
}

// Value Object (DDD style) — ainda melhor
class Email {
  private readonly value: string;
  constructor(raw: string) {
    if (!raw.includes('@') || raw.length < 5)
      throw new Error('Email inválido');
    this.value = raw.toLowerCase();
  }
  toString() { return this.value; }
}

// Agora a regra vive em UM lugar — mudar aqui muda em todo o sistema
const email = new Email('cesar@aethostech.com.br');`,
`# ✓ BOM
class Email:
    def __init__(self, raw: str):
        if '@' not in raw or len(raw) < 5:
            raise ValueError('Email inválido')
        self.value = raw.lower()

    def __str__(self): return self.value`,null)}
${quiz('Qual cenário é uma violação do DRY?',
['Dois controllers com métodos chamados "create" que fazem coisas diferentes',
'A mesma regra de validação de CPF implementada independentemente em 4 módulos do sistema',
'Uma função de 50 linhas que poderia ser dividida em 3 funções menores',
'Usar a mesma biblioteca em dois projetos diferentes'],1,
'✅ Quando a regra de validação de CPF muda (ex: nova regra da Receita Federal), você precisaria atualizar 4 lugares — e provavelmente esqueceria de um. Isso é conhecimento duplicado, a essência do problema que o DRY resolve.')}
${playground(`// DRY na prática — Value Object elimina duplicação
class Email {
  constructor(raw) {
    if (!raw || !raw.includes('@') || raw.length < 5)
      throw new Error('Email inválido: ' + raw);
    this.value = raw.toLowerCase().trim();
  }
  toString() { return this.value; }
  equals(other) { return this.value === other.value; }
}

// Mesma regra, zero duplicação
try {
  const e1 = new Email('CESAR@AETHOSTECH.COM.BR');
  const e2 = new Email('cesar@aethostech.com.br');
  console.log('Email válido:', e1.toString());
  console.log('São iguais?', e1.equals(e2));

  new Email('invalido'); // vai lançar exceção
} catch(e) {
  console.log('Erro capturado:', e.message);
}
`, 'Tente criar um Email inválido!')}
`},
{id:'kiss',title:'KISS · YAGNI · LoD',level:'i',content:`
<h1>KISS, YAGNI e Lei de Deméter</h1>
<p class="lead">Três princípios que combatem a superengenharia e o acoplamento excessivo.</p>
<h2>KISS — Keep It Simple</h2>
<div class="pbox"><div class="pbox-name">KISS</div><div class="pbox-def">Sistemas funcionam melhor quando são mantidos simples. <strong>Complexidade deve ser evitada sempre que possível.</strong></div></div>
<p>A complexidade tem um custo permanente: cada pessoa que entra no time precisa aprender, cada bug precisa ser rastreado através dela, cada feature nova precisa se encaixar nela.</p>
${badgood('Criar uma hierarquia de herança com 4 níveis + 3 interfaces + 2 abstract factories para resolver um problema que um mapa simples de funções resolvia.',
'Função de 15 linhas que faz exatamente o que precisa, sem abstrações prematuras. Pode ser lida e entendida em 30 segundos.')}
${callout('💡','<strong>Sinal de KISS violado:</strong> você precisa de um diagrama para explicar como resolver um problema simples.','info')}
<h2>YAGNI — You Aren\'t Gonna Need It</h2>
<div class="pbox"><div class="pbox-name">YAGNI</div><div class="pbox-def">Não implemente algo até que você <strong>realmente precise dele</strong>. — Kent Beck (XP)</div></div>
<p>Cada linha de código que você escreve é código que precisa ser mantido, testado, documentado e entendido. Código "para o futuro" frequentemente nunca é usado — e quando o futuro chega, o requisito real é diferente do que você imaginou.</p>
${badgood('Criar um sistema de plugins extensível, configurável e multi-tenant para um MVP que tem 3 clientes e um caso de uso definido.',
'Escrever o código mais simples que satisfaz o requisito atual. Quando o requisito de extensibilidade surgir, você terá contexto real para projetar bem.')}
<h2>Lei de Deméter (LoD)</h2>
<div class="pbox"><div class="pbox-name">Lei de Deméter — Princípio do Menor Conhecimento</div><div class="pbox-def">Um módulo deve conhecer o mínimo sobre os internos de outros módulos. Fale apenas com seus <strong>amigos imediatos</strong>, não com desconhecidos.</div></div>
<p>Na prática: <code>a.b.c.doSomething()</code> é um sinal vermelho. Você está atravessando camadas que não são suas.</p>
${code(`// ✗ RUIM — train wreck / encadeamento profundo
user.getAddress().getCity().getPostalCode().getPrefix();
order.getCustomer().getProfile().getPreferences().getTheme();

// ✓ BOM — delegue a responsabilidade para o objeto correto
user.getPostalCodePrefix(); // User sabe como delegar internamente
order.getCustomerTheme();`,
`# ✗ RUIM
user.get_address().get_city().get_postal_code().get_prefix()

# ✓ BOM
user.get_postal_code_prefix()  # delegação interna`,null)}
${quiz('Qual é o principal risco do "train wreck" (a.b.c.d)?',
['O código fica mais lento por criar muitos objetos intermediários',
'Você acopla sua classe a toda a cadeia de dependências — se Address mudar sua estrutura interna, código em UserController quebra',
'Dificulta a leitura do código',
'Causa memory leak'],1,
'✅ O acoplamento em cascata é o real problema. Quando você escreve user.getAddress().getCity(), seu código depende não só de User, mas de Address e City. Uma mudança em qualquer um quebra você.')}
`},
{id:'cqs',title:'CQS e SoC',level:'m',content:`
<h1>CQS e Separation of Concerns</h1>
<h2>CQS — Command Query Separation</h2>
<div class="pbox"><div class="pbox-name">CQS — Bertrand Meyer</div><div class="pbox-def">Todo método deve ser <strong>Command</strong> (muda estado, não retorna nada) OU <strong>Query</strong> (retorna dados, não muda estado). <strong>Nunca os dois.</strong></div></div>
${code(`// ✗ RUIM — método que muda estado E retorna dado
class Stack<T> {
  pop(): T { // Viola CQS — remove E retorna
    const item = this.items[this.items.length - 1];
    this.items.pop();
    return item;
  }
}

// ✓ BOM — separado
class Stack<T> {
  peek(): T { return this.items[this.items.length - 1]; } // Query
  pop(): void { this.items.pop(); }                        // Command
}

// Outro exemplo — função de save que retorna ID é CQS violado:
// ✗ save(user): string  → salva E retorna ID
// ✓ save(user): void    → só salva (Command)
// ✓ nextId(): string    → só retorna próximo ID (Query)`,
`# ✗ RUIM
def pop(self):
    item = self.items[-1]
    self.items.pop()  # muda estado
    return item       # E retorna — ambos!

# ✓ BOM
def peek(self): return self.items[-1]  # só query
def pop(self): self.items.pop()        # só command`,null)}
<h2>Separation of Concerns (SoC)</h2>
<div class="pbox"><div class="pbox-name">SoC</div><div class="pbox-def">Partes do sistema que lidam com <strong>preocupações diferentes</strong> devem ser separadas. Cada parte deve endereçar uma, e apenas uma, preocupação.</div></div>
<p>SoC é o princípio que justifica a existência de camadas (UI, lógica, dados), de módulos separados (auth, billing, notification), e de microservices.</p>
<table><tr><th>Concern</th><th>Responsabilidade</th><th>Exemplos</th></tr>
<tr><td>Apresentação</td><td>Como mostrar ao usuário</td><td>React components, views, templates</td></tr>
<tr><td>Negócio</td><td>Regras e workflows do domínio</td><td>Services, use cases, domain objects</td></tr>
<tr><td>Dados</td><td>Persistência e acesso</td><td>Repositories, ORM, queries</td></tr>
<tr><td>Infraestrutura</td><td>Comunicação com mundo externo</td><td>HTTP clients, queues, email, storage</td></tr>
</table>
${quiz('Qual é a consequência prática do CQS em APIs REST?',
['GET não deve ter body; POST não deve ter query params',
'Endpoints de leitura (GET) não devem ter efeitos colaterais; endpoints de escrita (POST/PUT/DELETE) não precisam retornar o recurso completo',
'APIs RESTful violam CQS por natureza',
'CQS não se aplica a APIs — é um princípio apenas para OOP'],1,
'✅ No REST, GET requests são Queries: nenhum efeito colateral, idempotentes, cacheáveis. POST/PUT/DELETE são Commands. Quando um POST cria um recurso e retorna o objeto completo, isso é conveniente mas tecnicamente viola CQS puro — a CQRS architectural pattern resolve isso de forma mais elaborada.')}
`}
]},
{id:'criacionais',title:'Patterns Criacionais',emoji:'🏭',color:'#F87171',level:'m',
 sections:[
  {id:'factory',title:'Factory Method',level:'m',content:`
<div class="ph"><div class="pic">🏭</div><div class="pm">
<div class="pcat">GoF Criacional · 1/5</div>
<div class="pname">Factory Method</div>
<div class="pint">Define uma interface para criar objetos, mas deixa as subclasses decidirem qual classe instanciar.</div>
</div></div>
<div class="ptags"><div class="tag">Criacional</div><div class="tag">GoF</div><div class="tag">Polimorfismo</div><div class="tag">OCP</div></div>
<h2>Problema</h2>
<p>Você precisa criar objetos, mas o tipo exato só é conhecido em tempo de execução — ou você quer que subclasses determinem o tipo. Usar <code>new ConcreteClass()</code> diretamente acopla o código ao tipo concreto.</p>
<h2>Estrutura</h2>
${diag(`  Creator (abstract)
  ├── + factoryMethod(): Product  ← subclasses sobrescrevem
  └── + operation()               ← usa o produto

  ConcreteCreatorA         ConcreteCreatorB
  └── factoryMethod()      └── factoryMethod()
       → ProductA               → ProductB`)}
${code(`// Produto
interface Notificacao {
  enviar(msg: string): void;
}

class NotificacaoEmail implements Notificacao {
  enviar(msg: string) { console.log(\`📧 Email: \${msg}\`); }
}

class NotificacaoSMS implements Notificacao {
  enviar(msg: string) { console.log(\`📱 SMS: \${msg}\`); }
}

class NotificacaoPush implements Notificacao {
  enviar(msg: string) { console.log(\`🔔 Push: \${msg}\`); }
}

// Creator abstrato com factory method
abstract class NotificacaoService {
  abstract criarNotificacao(): Notificacao; // factory method

  notificar(msg: string) { // usa o factory method internamente
    const notif = this.criarNotificacao();
    notif.enviar(msg);
  }
}

// Criadores concretos
class EmailService extends NotificacaoService {
  criarNotificacao() { return new NotificacaoEmail(); }
}

class SMSService extends NotificacaoService {
  criarNotificacao() { return new NotificacaoSMS(); }
}

// Uso
const service: NotificacaoService = new EmailService();
service.notificar('Seu pedido foi aprovado!');`,
`from abc import ABC, abstractmethod

class Notificacao(ABC):
    @abstractmethod
    def enviar(self, msg: str): ...

class NotificacaoEmail(Notificacao):
    def enviar(self, msg): print(f'📧 Email: {msg}')

class NotificacaoSMS(Notificacao):
    def enviar(self, msg): print(f'📱 SMS: {msg}')

class NotificacaoService(ABC):
    @abstractmethod
    def criar_notificacao(self) -> Notificacao: ...

    def notificar(self, msg: str):
        notif = self.criar_notificacao()
        notif.enviar(msg)

class EmailService(NotificacaoService):
    def criar_notificacao(self): return NotificacaoEmail()`,null)}
<h2>Quando usar</h2>
<ul>
<li>Quando o tipo exato do objeto a criar não é conhecido até runtime</li>
<li>Quando você quer que subclasses decidam qual objeto criar</li>
<li>Quando quer evitar acoplar código a classes concretas</li>
</ul>
<h2>Quando NÃO usar</h2>
<ul>
<li>Para criações simples que não variam — é overengineering</li>
<li>Quando uma função de criação simples já resolve</li>
</ul>
${quiz('Qual a diferença entre Factory Method e Simple Factory (função que retorna objetos)?',
['Não há diferença prática',
'Factory Method usa polimorfismo e herança — subclasses decidem o que criar. Simple Factory é só uma função de conveniência — sem extensão via herança',
'Simple Factory é a versão moderna e deve substituir Factory Method',
'Factory Method só funciona em linguagens estáticas'],1,
'✅ Simple Factory é um padrão criacional informal. Factory Method é um padrão GoF formal que usa polimorfismo: adicionar um novo tipo significa criar uma nova subclasse, sem modificar o criador base (OCP).')}
`},
{id:'builder',title:'Builder',level:'m',content:`
<div class="ph"><div class="pic">🔨</div><div class="pm">
<div class="pcat">GoF Criacional · 2/5</div>
<div class="pname">Builder</div>
<div class="pint">Separa a construção de um objeto complexo da sua representação, permitindo o mesmo processo criar diferentes representações.</div>
</div></div>
<h2>Problema</h2>
<p>Objetos com muitos parâmetros opcionais geram construtores monstruosos (<em>telescoping constructors</em>) ou objetos inválidos criados em dois passos.</p>
${code(`// ✗ RUIM — telescoping constructor
const pizza = new Pizza('grande', 'calabresa', true, false, true, 'grossa', 'tradicional');
//                      ↑ O que é cada boolean?? 🤷

// ✓ BOM — Builder com fluent interface
const pizza = new PizzaBuilder()
  .tamanho('grande')
  .sabor('calabresa')
  .comQueijo()
  .semCebola()
  .bordaRecheada('catupiry')
  .build();

// Implementação
class Pizza {
  constructor(
    readonly tamanho: string,
    readonly sabor: string,
    readonly queijo: boolean,
    readonly cebola: boolean,
    readonly borda: string | null
  ) {}
}

class PizzaBuilder {
  private _tamanho = 'media';
  private _sabor = 'mussarela';
  private _queijo = true;
  private _cebola = true;
  private _borda: string | null = null;

  tamanho(t: string) { this._tamanho = t; return this; }
  sabor(s: string) { this._sabor = s; return this; }
  comQueijo() { this._queijo = true; return this; }
  semQueijo() { this._queijo = false; return this; }
  semCebola() { this._cebola = false; return this; }
  bordaRecheada(recheio: string) { this._borda = recheio; return this; }

  build(): Pizza {
    return new Pizza(this._tamanho, this._sabor, this._queijo, this._cebola, this._borda);
  }
}`,
`class Pizza:
    def __init__(self, tamanho, sabor, queijo, cebola, borda):
        self.tamanho = tamanho
        self.sabor = sabor
        self.queijo = queijo
        self.borda = borda

class PizzaBuilder:
    def __init__(self):
        self._tamanho = 'media'
        self._sabor = 'mussarela'
        self._queijo = True
        self._borda = None

    def tamanho(self, t): self._tamanho = t; return self
    def sabor(self, s): self._sabor = s; return self
    def sem_queijo(self): self._queijo = False; return self
    def borda_recheada(self, r): self._borda = r; return self

    def build(self):
        return Pizza(self._tamanho, self._sabor, self._queijo, True, self._borda)`,null)}
${quiz('Qual é o principal benefício do método build() no final da cadeia Builder?',
['Faz a validação e pode lançar exceção se o objeto estiver em estado inválido',
'Apenas converte o Builder em outro tipo',
'É necessário por limitações das linguagens OOP',
'Retorna uma cópia do builder para reuso'],0,
'✅ O build() é o momento de validação e criação do objeto final. Ali você pode checar: "um pedido sem itens não pode ser criado", "uma pizza sem sabor é inválida". O Builder garante que o objeto final é sempre válido.')}
${playground(`// Builder Pattern — experimente construir uma pizza!
class Pizza {
  constructor(t, s, q, b) {
    this.tamanho = t; this.sabor = s;
    this.queijo = q; this.borda = b;
  }
  toString() {
    return \`Pizza \${this.tamanho} de \${this.sabor}\${this.queijo?' com queijo':' sem queijo'}\${this.borda?' borda '+this.borda:''}\`;
  }
}

class PizzaBuilder {
  constructor() { this._t='media'; this._s='mussarela'; this._q=true; this._b=null; }
  tamanho(t) { this._t=t; return this; }
  sabor(s) { this._s=s; return this; }
  semQueijo() { this._q=false; return this; }
  bordaRecheada(r) { this._b=r; return this; }
  build() { return new Pizza(this._t, this._s, this._q, this._b); }
}

const pizza = new PizzaBuilder()
  .tamanho('grande')
  .sabor('calabresa')
  .semQueijo()
  .bordaRecheada('catupiry')
  .build();

console.log(pizza.toString());
console.log('Total de passos: 4 (sem constructor monstruoso!)');
`, 'Edite e clique Executar para experimentar')}
`},
{id:'singleton',title:'Singleton',level:'i',content:`
<div class="ph"><div class="pic">💎</div><div class="pm">
<div class="pcat">GoF Criacional · 3/5</div>
<div class="pname">Singleton</div>
<div class="pint">Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela.</div>
</div></div>
${callout('⚠️','Singleton é o padrão GoF mais controverso e frequentemente <strong>abusado</strong>. Use com cautela — ele é um estado global disfarçado e dificulta testes.','danger')}
${code(`// Implementação thread-safe (Node.js single-thread → simples)
class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;
  private pool: ConnectionPool;

  private constructor() {
    this.pool = new ConnectionPool({ host: process.env.DB_HOST! });
  }

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  query(sql: string) { return this.pool.query(sql); }
}

// Uso
const db = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db === db2); // true — mesma instância`,
`class DatabaseConnection:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.pool = ConnectionPool()
        return cls._instance

db1 = DatabaseConnection()
db2 = DatabaseConnection()
print(db1 is db2)  # True`,null)}
<h2>Quando usar (raramente)</h2>
<ul><li>Logger global único</li><li>Pool de conexões com banco</li><li>Cache de configuração lida uma vez</li></ul>
<h2>Alternativas melhores</h2>
<ul><li><strong>DI Container</strong> — frameworks gerenciam o ciclo de vida (NestJS, Spring)</li><li><strong>Module-level singleton</strong> — em Node.js, módulos são singletons por natureza</li></ul>
${quiz('Por que Singleton dificulta testes unitários?',
['Porque é difícil importar',
'Porque o estado global persiste entre testes — um teste pode contaminar o próximo, e você não consegue injetar um mock',
'Porque usa muito memória',
'Porque é thread-unsafe'],1,
'✅ Quando DatabaseConnection.getInstance() retorna sempre a mesma instância, você não consegue injetar um mock. Cada teste que usa o Singleton compartilha estado — ordem de execução dos testes importa, e isso é um pesadelo. DI resolve isso.')}
`},
{id:'prototype-abstract',title:'Prototype & Abstract Factory',level:'m',content:`
<h1>Prototype & Abstract Factory</h1>
<h2>Prototype</h2>
<div class="ph"><div class="pic">🧬</div><div class="pm">
<div class="pcat">GoF Criacional · 4/5</div>
<div class="pname">Prototype</div>
<div class="pint">Cria objetos novos copiando (clonando) um objeto existente — o protótipo.</div>
</div></div>
${code(`interface Clonavel<T> {
  clone(): T;
}

class Personagem implements Clonavel<Personagem> {
  constructor(
    public nome: string,
    public vida: number,
    public habilidades: string[]
  ) {}

  clone(): Personagem {
    return new Personagem(
      this.nome,
      this.vida,
      [...this.habilidades] // deep copy do array
    );
  }
}

const heroi = new Personagem('Arquiteto', 100, ['SOLID', 'DDD', 'TDD']);
const clone = heroi.clone();
clone.nome = 'Arquiteto Clone';
// heroi.nome ainda é 'Arquiteto'`,
`import copy

class Personagem:
    def __init__(self, nome, vida, habilidades):
        self.nome = nome
        self.vida = vida
        self.habilidades = habilidades

    def clone(self):
        return copy.deepcopy(self)

heroi = Personagem('Arquiteto', 100, ['SOLID', 'DDD'])
clone = heroi.clone()
clone.nome = 'Clone'  # heroi.nome intocado`,null)}
<h2>Abstract Factory</h2>
<div class="ph"><div class="pic">🏗️</div><div class="pm">
<div class="pcat">GoF Criacional · 5/5</div>
<div class="pname">Abstract Factory</div>
<div class="pint">Fornece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas.</div>
</div></div>
<p>Pense em uma fábrica de UI: no macOS você quer botões, checkboxes e menus com estilo Mac. No Windows, estilo Windows. Abstract Factory garante que você usa sempre a família certa.</p>
${code(`// Família de componentes
interface Button { render(): void; }
interface Checkbox { render(): void; }

// Abstract Factory
interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Família macOS
class MacButton implements Button { render() { console.log('🍎 Mac Button'); } }
class MacCheckbox implements Checkbox { render() { console.log('🍎 Mac Checkbox'); } }
class MacUIFactory implements UIFactory {
  createButton() { return new MacButton(); }
  createCheckbox() { return new MacCheckbox(); }
}

// Família Windows
class WinButton implements Button { render() { console.log('🪟 Win Button'); } }
class WinCheckbox implements Checkbox { render() { console.log('🪟 Win Checkbox'); } }
class WinUIFactory implements UIFactory {
  createButton() { return new WinButton(); }
  createCheckbox() { return new WinCheckbox(); }
}

// App usa a fábrica sem saber qual família está usando
function renderApp(factory: UIFactory) {
  factory.createButton().render();
  factory.createCheckbox().render();
}`,null,null)}
${quiz('Qual é a diferença principal entre Factory Method e Abstract Factory?',
['Abstract Factory é mais moderno e substitui Factory Method',
'Factory Method cria um produto usando herança. Abstract Factory cria famílias de produtos relacionados usando composição',
'Abstract Factory só funciona para criar UI components',
'Factory Method retorna interface; Abstract Factory retorna classe concreta'],1,
'✅ Factory Method: uma operação de criação via herança. Abstract Factory: um objeto inteiro dedicado a criar uma família de objetos relacionados. Use Abstract Factory quando você precisa garantir que os produtos criados são compatíveis entre si.')}
`}
]},
{id:'estruturais',title:'Patterns Estruturais',emoji:'🔧',color:'#60A5FA',level:'m',
 sections:[
  {id:'adapter-facade',title:'Adapter & Facade',level:'m',content:`
<h1>Adapter & Facade</h1>
<h2>Adapter</h2>
<div class="ph"><div class="pic">🔌</div><div class="pm">
<div class="pcat">GoF Estrutural · 1/7</div>
<div class="pname">Adapter</div>
<div class="pint">Converte a interface de uma classe em outra interface esperada pelos clientes. Permite que classes incompatíveis trabalhem juntas.</div>
</div></div>
${code(`// Interface que o sistema espera
interface Logger {
  log(level: string, msg: string): void;
  error(msg: string): void;
}

// Biblioteca externa com interface diferente (Pino, Winston, etc)
class PinoLogger {
  pino_log(data: { level: string; message: string }) { /* ... */ }
  pino_error(data: { err: string }) { /* ... */ }
}

// Adapter — faz Pino se comportar como Logger
class PinoAdapter implements Logger {
  constructor(private pino: PinoLogger) {}

  log(level: string, msg: string) {
    this.pino.pino_log({ level, message: msg });
  }

  error(msg: string) {
    this.pino.pino_error({ err: msg });
  }
}

// Sistema usa Logger (nossa interface) — não sabe que é Pino por baixo
const logger: Logger = new PinoAdapter(new PinoLogger());
logger.log('info', 'Sistema iniciado');`,
`class PinoLogger:
    def pino_log(self, data): ...
    def pino_error(self, data): ...

class PinoAdapter:
    def __init__(self, pino: PinoLogger):
        self.pino = pino

    def log(self, level, msg):
        self.pino.pino_log({'level': level, 'message': msg})

    def error(self, msg):
        self.pino.pino_error({'err': msg})`,null)}
<h2>Facade</h2>
<div class="ph"><div class="pic">🏛️</div><div class="pm">
<div class="pcat">GoF Estrutural · 2/7</div>
<div class="pname">Facade</div>
<div class="pint">Fornece uma interface simplificada para um subsistema complexo.</div>
</div></div>
${code(`// Subsistema complexo com muitas classes
class VideoDecoder { decode(file: File): RawVideo { /* ... */ return {} as any; } }
class AudioDecoder { decode(file: File): RawAudio { /* ... */ return {} as any; } }
class VideoEncoder { encode(v: RawVideo, format: string): Buffer { /* ... */ return {} as any; } }
class AudioEncoder { encode(a: RawAudio, bitrate: number): Buffer { /* ... */ return {} as any; } }
class FileWriter { write(data: Buffer, path: string) { /* ... */ } }

// Facade — interface simples para o subsistema
class VideoConverter {
  private vd = new VideoDecoder();
  private ad = new AudioDecoder();
  private ve = new VideoEncoder();
  private ae = new AudioEncoder();
  private fw = new FileWriter();

  convert(input: File, format: 'mp4' | 'webm', output: string) {
    const rawVideo = this.vd.decode(input);
    const rawAudio = this.ad.decode(input);
    const video = this.ve.encode(rawVideo, format);
    const audio = this.ae.encode(rawAudio, 128);
    this.fw.write(Buffer.concat([video, audio]), output);
  }
}

// Uso simples — cliente não sabe da complexidade
const converter = new VideoConverter();
converter.convert(file, 'mp4', 'output.mp4');`,null,null)}
${quiz('Qual a diferença entre Adapter e Facade?',
['Adapter é para bibliotecas externas; Facade é para código interno',
'Adapter converte uma interface existente em outra esperada. Facade cria uma interface nova e simplificada sobre um subsistema complexo',
'Facade e Adapter fazem a mesma coisa com nomes diferentes',
'Adapter requer herança; Facade requer composição'],1,
'✅ Adapter resolve incompatibilidade de interfaces — é uma tradução. Facade resolve complexidade — é uma simplificação. Adapter não muda a interface do subsistema; Facade cria uma nova interface que esconde os detalhes.')}
`},
{id:'decorator-proxy',title:'Decorator & Proxy',level:'m',content:`
<h1>Decorator & Proxy</h1>
<h2>Decorator</h2>
<div class="ph"><div class="pic">🎀</div><div class="pm">
<div class="pcat">GoF Estrutural · 3/7</div>
<div class="pname">Decorator</div>
<div class="pint">Adiciona comportamentos a objetos dinamicamente, sem alterar sua classe.</div>
</div></div>
<p>Herança é estática — você herda tudo e não pode mudar em runtime. Decorator permite compor comportamentos dinamicamente, como camadas.</p>
${code(`interface DataSource {
  read(): string;
  write(data: string): void;
}

// Componente base
class FileDataSource implements DataSource {
  constructor(private filename: string) {}
  read() { return \`data from \${this.filename}\`; }
  write(data: string) { console.log(\`writing to \${this.filename}\`); }
}

// Base do Decorator
abstract class DataSourceDecorator implements DataSource {
  constructor(protected wrapped: DataSource) {}
  read() { return this.wrapped.read(); }
  write(data: string) { this.wrapped.write(data); }
}

// Decorator de compressão
class CompressionDecorator extends DataSourceDecorator {
  read() { return \`[decompress] \${this.wrapped.read()}\`; }
  write(data: string) { this.wrapped.write(\`[compress] \${data}\`); }
}

// Decorator de encriptação
class EncryptionDecorator extends DataSourceDecorator {
  read() { return \`[decrypt] \${this.wrapped.read()}\`; }
  write(data: string) { this.wrapped.write(\`[encrypt] \${data}\`); }
}

// Composição dinâmica de comportamentos
let source: DataSource = new FileDataSource('data.bin');
source = new CompressionDecorator(source);
source = new EncryptionDecorator(source);

source.write('secret data'); // → [encrypt] [compress] secret data`,
`from abc import ABC, abstractmethod

class DataSource(ABC):
    @abstractmethod
    def read(self) -> str: ...
    @abstractmethod
    def write(self, data: str): ...

class FileDataSource(DataSource):
    def read(self): return 'file data'
    def write(self, data): print(f'writing: {data}')

class CompressionDecorator(DataSource):
    def __init__(self, wrapped): self._w = wrapped
    def read(self): return f'[decompress] {self._w.read()}'
    def write(self, data): self._w.write(f'[compress] {data}')`,null)}
<h2>Proxy</h2>
<div class="ph"><div class="pic">🪞</div><div class="pm">
<div class="pcat">GoF Estrutural · 4/7</div>
<div class="pname">Proxy</div>
<div class="pint">Fornece um substituto ou ponto de acesso a outro objeto para controlar o acesso a ele.</div>
</div></div>
${code(`interface UserService {
  getUser(id: string): Promise<User>;
}

// Serviço real
class RealUserService implements UserService {
  async getUser(id: string): Promise<User> {
    return fetch(\`/api/users/\${id}\`).then(r => r.json());
  }
}

// Proxy com cache — mesmo contrato, comportamento diferente
class CachedUserService implements UserService {
  private cache = new Map<string, User>();

  constructor(private service: UserService) {}

  async getUser(id: string): Promise<User> {
    if (this.cache.has(id)) {
      console.log('Cache hit!');
      return this.cache.get(id)!;
    }
    const user = await this.service.getUser(id);
    this.cache.set(id, user);
    return user;
  }
}

// Uso transparente — cliente não sabe se é real ou proxy
const service: UserService = new CachedUserService(new RealUserService());`,null,null)}
${quiz('Qual a diferença entre Proxy e Decorator?',
['São idênticos — apenas nomes diferentes',
'Proxy controla acesso ao objeto original (lazy loading, cache, auth, logging) sem adicionar funcionalidades. Decorator adiciona comportamentos ao objeto sem alterar o acesso',
'Proxy sempre usa herança; Decorator sempre usa composição',
'Proxy é para objetos remotos; Decorator é para objetos locais'],1,
'✅ A distinção é de intenção: Proxy gerencia o acesso (quando e se o objeto real é acessado). Decorator enriquece o comportamento (o que acontece quando o objeto é acessado). Na prática, a estrutura é similar, mas o propósito é diferente.')}
`},
{id:'composite-bridge',title:'Composite, Bridge & Flyweight',level:'s',content:`
<h1>Composite, Bridge & Flyweight</h1>
<h2>Composite</h2>
<div class="ph"><div class="pic">🌲</div><div class="pm">
<div class="pcat">GoF Estrutural · 5/7</div>
<div class="pname">Composite</div>
<div class="pint">Compõe objetos em estruturas de árvore para representar hierarquias parte-todo. Permite tratar objetos individuais e composições uniformemente.</div>
</div></div>
${code(`interface FileSystemItem {
  getName(): string;
  getSize(): number;
  print(indent?: string): void;
}

class Arquivo implements FileSystemItem {
  constructor(private name: string, private size: number) {}
  getName() { return this.name; }
  getSize() { return this.size; }
  print(indent = '') { console.log(\`\${indent}📄 \${this.name} (\${this.size}kb)\`); }
}

class Pasta implements FileSystemItem {
  private items: FileSystemItem[] = [];
  constructor(private name: string) {}
  add(item: FileSystemItem) { this.items.push(item); }
  getName() { return this.name; }
  getSize() { return this.items.reduce((s, i) => s + i.getSize(), 0); }
  print(indent = '') {
    console.log(\`\${indent}📁 \${this.name}\`);
    this.items.forEach(i => i.print(indent + '  '));
  }
}

const root = new Pasta('projetos');
const front = new Pasta('frontend');
front.add(new Arquivo('App.tsx', 12));
front.add(new Arquivo('index.css', 3));
root.add(front);
root.add(new Arquivo('README.md', 1));
root.print(); // Trata Pasta e Arquivo uniformemente`,null,null)}
<h2>Bridge</h2>
<div class="ph"><div class="pic">🌉</div><div class="pm">
<div class="pcat">GoF Estrutural · 6/7</div>
<div class="pname">Bridge</div>
<div class="pint">Separa uma abstração de sua implementação para que as duas possam variar independentemente.</div>
</div></div>
${code(`// Implementação (pode variar)
interface Renderer {
  renderCircle(x: number, y: number, r: number): void;
}

class SVGRenderer implements Renderer {
  renderCircle(x, y, r) { console.log(\`<circle cx="\${x}" cy="\${y}" r="\${r}"/>\`); }
}
class CanvasRenderer implements Renderer {
  renderCircle(x, y, r) { console.log(\`ctx.arc(\${x},\${y},\${r},0,2π)\`); }
}

// Abstração usa a implementação via bridge
abstract class Forma {
  constructor(protected renderer: Renderer) {}
  abstract draw(): void;
}

class Circulo extends Forma {
  constructor(renderer: Renderer, private x: number, private y: number, private r: number) {
    super(renderer);
  }
  draw() { this.renderer.renderCircle(this.x, this.y, this.r); }
}

// Abstrações e implementações variam independentemente
const circuloSVG = new Circulo(new SVGRenderer(), 50, 50, 20);
const circuloCanvas = new Circulo(new CanvasRenderer(), 50, 50, 20);`,null,null)}
${quiz('Composite é mais adequado quando:',
['Você precisa adicionar comportamentos a objetos individualmente',
'Você precisa tratar objetos individuais e grupos de objetos da mesma forma, como em uma estrutura de árvore',
'Você precisa separar implementação de abstração',
'Você quer controlar o acesso a um objeto'],1,
'✅ O poder do Composite está na uniformidade: client code não precisa saber se está lidando com um Arquivo ou uma Pasta — ambos são FileSystemItem. Isso simplifica algoritmos que precisam traversar hierarquias.')}
`}
]},

{id:'comportamentais',title:'Patterns Comportamentais',emoji:'🎭',color:'#A78BFA',level:'m',
 sections:[
  {id:'observer-strategy',title:'Observer & Strategy',level:'m',content:`
<h1>Observer & Strategy</h1>
<h2>Observer</h2>
<div class="ph"><div class="pic">👁️</div><div class="pm">
<div class="pcat">GoF Comportamental · 1/11</div>
<div class="pname">Observer</div>
<div class="pint">Define uma dependência um-para-muitos onde, quando um objeto muda de estado, todos os seus dependentes são notificados automaticamente.</div>
</div></div>
${code(`interface Observer<T> {
  update(data: T): void;
}

class EventEmitter<T> {
  private observers: Observer<T>[] = [];

  subscribe(obs: Observer<T>) { this.observers.push(obs); }
  unsubscribe(obs: Observer<T>) {
    this.observers = this.observers.filter(o => o !== obs);
  }
  notify(data: T) { this.observers.forEach(o => o.update(data)); }
}

// Domínio
interface OrderEvent { orderId: string; status: string; }

class OrderService extends EventEmitter<OrderEvent> {
  updateStatus(orderId: string, status: string) {
    // ... atualiza no banco
    this.notify({ orderId, status }); // notifica todos os observers
  }
}

// Observers independentes
class EmailNotifier implements Observer<OrderEvent> {
  update(e: OrderEvent) { console.log(\`📧 Email: pedido \${e.orderId} → \${e.status}\`); }
}

class AuditLogger implements Observer<OrderEvent> {
  update(e: OrderEvent) { console.log(\`📋 Audit: \${JSON.stringify(e)}\`); }
}

const svc = new OrderService();
svc.subscribe(new EmailNotifier());
svc.subscribe(new AuditLogger());
svc.updateStatus('ORD-001', 'shipped'); // ambos são notificados`,
`class OrderService:
    def __init__(self):
        self._observers = []

    def subscribe(self, obs): self._observers.append(obs)
    def notify(self, event):
        for obs in self._observers: obs.update(event)

    def update_status(self, order_id, status):
        self.notify({'order_id': order_id, 'status': status})`,null)}
<h2>Strategy</h2>
<div class="ph"><div class="pic">♟️</div><div class="pm">
<div class="pcat">GoF Comportamental · 2/11</div>
<div class="pname">Strategy</div>
<div class="pint">Define uma família de algoritmos, encapsula cada um e os torna intercambiáveis em tempo de execução.</div>
</div></div>
${code(`interface SortStrategy<T> {
  sort(data: T[]): T[];
}

class QuickSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] { return [...data].sort(); } // simplificado
}

class BubbleSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    const arr = [...data];
    for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr.length - i - 1; j++)
        if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    return arr;
  }
}

class Sorter<T> {
  constructor(private strategy: SortStrategy<T>) {}

  setStrategy(s: SortStrategy<T>) { this.strategy = s; }
  sort(data: T[]) { return this.strategy.sort(data); }
}

const sorter = new Sorter(new QuickSort());
sorter.sort([3,1,4,1,5,9]);

// Muda estratégia em runtime
sorter.setStrategy(new BubbleSort());
sorter.sort([3,1,4,1,5,9]);`,null,null)}
${playground(`// Strategy Pattern — algoritmos intercambiáveis
const strategies = {
  bubble: arr => {
    const a = [...arr];
    for(let i=0;i<a.length;i++)
      for(let j=0;j<a.length-i-1;j++)
        if(a[j]>a[j+1])[a[j],a[j+1]]=[a[j+1],a[j]];
    return a;
  },
  quick: arr => [...arr].sort((a,b)=>a-b),
  reverse: arr => [...arr].sort((a,b)=>b-a),
};

class Sorter {
  constructor(strategy) { this.strategy = strategy; }
  setStrategy(s) { this.strategy = s; }
  sort(data) { return this.strategy(data); }
}

const data = [3,1,4,1,5,9,2,6];
const sorter = new Sorter(strategies.bubble);

console.log('Bubble:', sorter.sort(data).join(', '));
sorter.setStrategy(strategies.quick);
console.log('Quick: ', sorter.sort(data).join(', '));
sorter.setStrategy(strategies.reverse);
console.log('Reverse:', sorter.sort(data).join(', '));
`, 'Adicione sua própria strategy!')}
${quiz('Qual problema Observer pode causar se não for bem gerenciado?',
['Performance ruim por usar polimorfismo',
'Memory leaks — observers subscritos que não são removidos mantêm referências vivas, impedindo o garbage collector de liberar memória',
'Stack overflow por notificações recursivas (em geral)',
'Race conditions em JavaScript single-thread'],1,
'✅ Memory leak é o problema clássico. Se um componente React, por exemplo, se inscreve em um EventEmitter no mount mas não cancela a subscrição no unmount, a referência ao componente fica viva mesmo após ser destruído. Sempre chame unsubscribe() no cleanup.')}
${playground(`// Observer Pattern — sistema de eventos
class EventEmitter {
  constructor() { this.observers = {}; }
  on(event, fn) {
    if (!this.observers[event]) this.observers[event] = [];
    this.observers[event].push(fn);
    return () => this.off(event, fn); // retorna unsubscribe
  }
  off(event, fn) {
    this.observers[event] = (this.observers[event]||[]).filter(f=>f!==fn);
  }
  emit(event, data) {
    (this.observers[event]||[]).forEach(fn => fn(data));
  }
}

const bus = new EventEmitter();

// Subscrever
const unsub1 = bus.on('order.created', e => console.log('Email:', e.id));
const unsub2 = bus.on('order.created', e => console.log('Audit:', e.id, e.total));

bus.emit('order.created', { id: 'ORD-001', total: 250 });

// Cancelar subscrição
unsub1();
bus.emit('order.created', { id: 'ORD-002', total: 180 });
// Só o Audit recebe agora
`, 'Experimente adicionar mais observers!')}
`},
{id:'command-chain',title:'Command & Chain of Responsibility',level:'m',content:`
<h1>Command & Chain of Responsibility</h1>
<h2>Command</h2>
<div class="ph"><div class="pic">📋</div><div class="pm">
<div class="pcat">GoF Comportamental · 3/11</div>
<div class="pname">Command</div>
<div class="pint">Encapsula uma requisição como um objeto, permitindo parametrizar clientes, enfileirar, logar e suportar operações desfazíveis.</div>
</div></div>
${code(`interface Command {
  execute(): void;
  undo(): void;
}

class TextEditor {
  private text = '';
  private history: Command[] = [];

  insert(text: string, pos: number) {
    const cmd = new InsertCommand(this, text, pos);
    cmd.execute();
    this.history.push(cmd);
  }

  undoLast() {
    this.history.pop()?.undo();
  }

  getText() { return this.text; }
  _insert(t: string, pos: number) {
    this.text = this.text.slice(0, pos) + t + this.text.slice(pos);
  }
  _delete(pos: number, len: number) {
    this.text = this.text.slice(0, pos) + this.text.slice(pos + len);
  }
}

class InsertCommand implements Command {
  constructor(
    private editor: TextEditor,
    private text: string,
    private pos: number
  ) {}

  execute() { this.editor._insert(this.text, this.pos); }
  undo() { this.editor._delete(this.pos, this.text.length); }
}

const editor = new TextEditor();
editor.insert('Hello ', 0);
editor.insert('World', 6);
console.log(editor.getText()); // "Hello World"
editor.undoLast();
console.log(editor.getText()); // "Hello "`,null,null)}
<h2>Chain of Responsibility</h2>
<div class="ph"><div class="pic">⛓️</div><div class="pm">
<div class="pcat">GoF Comportamental · 4/11</div>
<div class="pname">Chain of Responsibility</div>
<div class="pint">Passa a requisição ao longo de uma cadeia de handlers até que um deles trate.</div>
</div></div>
${code(`abstract class Handler<T, R> {
  protected next: Handler<T, R> | null = null;

  setNext(handler: Handler<T, R>): Handler<T, R> {
    this.next = handler;
    return handler; // permite encadeamento fluente
  }

  abstract handle(request: T): R | null;
}

// Middleware HTTP (Express-style)
interface HttpRequest { method: string; path: string; user?: string; body?: any; }

class AuthMiddleware extends Handler<HttpRequest, string> {
  handle(req: HttpRequest) {
    if (!req.user) return '401 Unauthorized';
    return this.next?.handle(req) ?? null;
  }
}

class RateLimitMiddleware extends Handler<HttpRequest, string> {
  private requests = new Map<string, number>();
  handle(req: HttpRequest) {
    const count = (this.requests.get(req.user!) ?? 0) + 1;
    this.requests.set(req.user!, count);
    if (count > 100) return '429 Too Many Requests';
    return this.next?.handle(req) ?? null;
  }
}

class RouteHandler extends Handler<HttpRequest, string> {
  handle(req: HttpRequest) { return \`200 OK: \${req.path}\`; }
}

// Montagem da cadeia
const auth = new AuthMiddleware();
const rateLimit = new RateLimitMiddleware();
const route = new RouteHandler();
auth.setNext(rateLimit).setNext(route);

console.log(auth.handle({ method: 'GET', path: '/api', user: 'cesar' })); // 200 OK
console.log(auth.handle({ method: 'GET', path: '/api' }));                // 401`,null,null)}
${quiz('Qual caso de uso real demonstra bem o padrão Chain of Responsibility?',
['Banco de dados com réplicas de leitura',
'Sistema de middleware HTTP onde cada camada (auth, logging, rate limit, validation) decide se passa a requisição adiante ou responde ela mesma',
'Cache com múltiplas camadas (L1, L2, L3)',
'Sistema de plugins'],1,
'✅ Middleware é o exemplo clássico. Cada middleware em Express/Fastify/Koa é um handler na cadeia: pode processar, transformar, encerrar (responder sem passar adiante) ou chamar next() para continuar a cadeia.')}
`},
{id:'state-template',title:'State, Template Method & demais',level:'m',content:`
<h1>State, Template Method e outros padrões comportamentais</h1>
<h2>State</h2>
<div class="ph"><div class="pic">🔀</div><div class="pm">
<div class="pcat">GoF Comportamental · 5/11</div>
<div class="pname">State</div>
<div class="pint">Permite que um objeto altere seu comportamento quando seu estado interno muda — parece que a classe mudou.</div>
</div></div>
${code(`interface OrderState {
  process(order: Order): void;
  cancel(order: Order): void;
  ship(order: Order): void;
}

class PendingState implements OrderState {
  process(o: Order) { o.setState(new ProcessingState()); }
  cancel(o: Order) { o.setState(new CancelledState()); }
  ship(o: Order) { throw new Error('Não pode enviar pedido pendente!'); }
}

class ProcessingState implements OrderState {
  process(o: Order) { throw new Error('Já está processando'); }
  cancel(o: Order) { o.setState(new CancelledState()); }
  ship(o: Order) { o.setState(new ShippedState()); }
}

class ShippedState implements OrderState {
  process(o: Order) { throw new Error('Já enviado'); }
  cancel(o: Order) { throw new Error('Não pode cancelar pedido enviado'); }
  ship(o: Order) { throw new Error('Já enviado'); }
}

class CancelledState implements OrderState {
  process(o: Order) { throw new Error('Pedido cancelado'); }
  cancel(o: Order) { throw new Error('Já cancelado'); }
  ship(o: Order) { throw new Error('Pedido cancelado'); }
}

class Order {
  private state: OrderState = new PendingState();
  setState(s: OrderState) { this.state = s; }
  process() { this.state.process(this); }
  cancel() { this.state.cancel(this); }
  ship() { this.state.ship(this); }
}`,null,null)}
<h2>Template Method</h2>
<div class="ph"><div class="pic">📄</div><div class="pm">
<div class="pcat">GoF Comportamental · 6/11</div>
<div class="pname">Template Method</div>
<div class="pint">Define o esqueleto de um algoritmo na superclasse, deixando que subclasses sobrescrevam etapas específicas sem alterar a estrutura.</div>
</div></div>
${code(`// Relatório: estrutura fixa, conteúdo variável
abstract class RelatorioGenerator {
  // Template Method — define a estrutura
  final generate(dados: any[]): string {
    const header = this.generateHeader();
    const body = this.generateBody(dados);
    const footer = this.generateFooter();
    return \`\${header}\n\${body}\n\${footer}\`;
  }

  protected abstract generateHeader(): string;
  protected abstract generateBody(dados: any[]): string;
  protected generateFooter() { return '--- fim do relatório ---'; } // hook opcional
}

class PDFReport extends RelatorioGenerator {
  protected generateHeader() { return '=== RELATÓRIO PDF ==='; }
  protected generateBody(dados: any[]) { return dados.map(d => \`| \${JSON.stringify(d)} |\`).join('\n'); }
}

class CSVReport extends RelatorioGenerator {
  protected generateHeader() { return 'id,nome,valor'; }
  protected generateBody(dados: any[]) { return dados.map(d => Object.values(d).join(',')).join('\n'); }
  protected generateFooter() { return ''; } // sobrescreve o hook
}`,null,null)}
<h2>Outros Padrões Comportamentais</h2>
<table><tr><th>Pattern</th><th>Intent</th><th>Uso típico</th></tr>
<tr><td><strong>Iterator</strong></td><td>Percorrer uma coleção sem expor sua estrutura interna</td><td>for...of em JS, iteradores customizados</td></tr>
<tr><td><strong>Mediator</strong></td><td>Reduz dependências entre objetos — comunicação via mediador central</td><td>Event bus, Redux store, MediatR (.NET)</td></tr>
<tr><td><strong>Memento</strong></td><td>Salva e restaura estados anteriores de um objeto</td><td>Undo/redo, autosave, snapshots</td></tr>
<tr><td><strong>Visitor</strong></td><td>Adiciona operações a objetos sem modificar suas classes</td><td>AST walkers, exportadores, relatórios</td></tr>
<tr><td><strong>Interpreter</strong></td><td>Define uma gramática e um interpretador para ela</td><td>Parsers, query builders, regex engines</td></tr>
</table>
${quiz('Por que State é superior a switch/if para máquinas de estado?',
['Porque switch é mais lento que polimorfismo',
'Cada estado é uma classe separada com suas próprias transições válidas. Adicionar um novo estado não exige modificar os estados existentes — OCP é respeitado',
'Porque switch não pode modelar estados',
'Porque polimorfismo é sempre melhor que condicionais'],1,
'✅ Com switch, cada novo estado exige modificar o switch central. Com State pattern, um novo estado é uma nova classe. Além disso, transições inválidas lançam exceção — o sistema não pode entrar em estado inconsistente implicitamente.')}
`}
]},
{id:'arquiteturais',title:'Padrões Arquiteturais',emoji:'🏛️',color:'#F59E0B',level:'s',
 sections:[
  {id:'clean-hex',title:'Clean & Hexagonal Architecture',level:'s',content:`
<div class="ph"><div class="pic">🎯</div><div class="pm">
<div class="pcat">Padrões Arquiteturais</div>
<div class="pname">Clean Architecture</div>
<div class="pint">Organiza o sistema em camadas concêntricas onde as dependências apontam para dentro — o domínio nunca sabe que a infra existe.</div>
</div></div>
${diag(`  ┌──────────────────────────────────────────┐
  │  Frameworks & Drivers (Web, DB, UI)      │
  │  ┌────────────────────────────────────┐  │
  │  │  Interface Adapters                │  │
  │  │  (Controllers, Gateways, Presenters│  │
  │  │  ┌──────────────────────────────┐  │  │
  │  │  │  Application Business Rules  │  │  │
  │  │  │  (Use Cases)                 │  │  │
  │  │  │  ┌────────────────────────┐  │  │  │
  │  │  │  │  Enterprise Business   │  │  │  │
  │  │  │  │  Rules (Entities)      │  │  │  │
  │  │  │  └────────────────────────┘  │  │  │
  │  │  └──────────────────────────────┘  │  │
  │  └────────────────────────────────────┘  │
  └──────────────────────────────────────────┘
  Regra: dependências sempre apontam para dentro ↓`)}
<h2>A Regra de Dependência</h2>
<p>O código fonte só pode depender de círculos mais internos. Nada no círculo interno pode saber nada sobre o círculo externo — nem o nome de uma função, classe, variável ou qualquer entidade de software declarada em um anel externo.</p>
${code(`// ✓ Estrutura de pasta Clean Architecture
// src/
// ├── domain/              ← Entities (sem dependências externas)
// │   ├── order.ts
// │   └── order.errors.ts
// ├── application/         ← Use Cases (depende só de domain)
// │   ├── create-order.usecase.ts
// │   └── ports/
// │       └── order.repository.ts  ← Interface (port)
// ├── infrastructure/      ← Adapters (implementa as ports)
// │   ├── order.prisma.repository.ts
// │   └── order.http.controller.ts
// └── main.ts              ← Composition root (conecta tudo)

// domain/order.ts — zero dependências externas
export class Order {
  private items: OrderItem[] = [];

  addItem(product: Product, qty: number) {
    if (qty <= 0) throw new Error('Quantidade inválida');
    this.items.push(new OrderItem(product, qty));
  }

  get total() {
    return this.items.reduce((sum, i) => sum + i.subtotal, 0);
  }
}

// application/ports/order.repository.ts — interface (port)
export interface OrderRepository {
  save(order: Order): Promise<void>;
  findById(id: string): Promise<Order | null>;
}

// application/create-order.usecase.ts — depende da interface, não da impl
export class CreateOrderUseCase {
  constructor(private repo: OrderRepository) {} // DIP em ação

  async execute(dto: CreateOrderDto): Promise<Order> {
    const order = new Order(dto.customerId);
    dto.items.forEach(i => order.addItem(i.product, i.qty));
    await this.repo.save(order);
    return order;
  }
}

// infrastructure/order.prisma.repository.ts — implementa o port
export class PrismaOrderRepository implements OrderRepository {
  constructor(private prisma: PrismaClient) {}
  async save(order: Order) { await this.prisma.order.create(/* ... */); }
  async findById(id: string) { /* ... */ return null; }
}`,null,null)}
<h2>Hexagonal Architecture (Ports & Adapters)</h2>
<div class="ph"><div class="pic">⬡</div><div class="pm">
<div class="pcat">Ports & Adapters — Alistair Cockburn, 2005</div>
<div class="pname">Hexagonal Architecture</div>
<div class="pint">O núcleo da aplicação se comunica com o mundo externo exclusivamente via Ports (interfaces) e Adapters (implementações).</div>
</div></div>
${diag(`
  [HTTP]    [CLI]    [Tests]
     \\        |        /
   [Adapter][Adapter][Adapter]  ← Adapters primários (driving)
          \\   |   /
    ┌───────────────────┐
    │   Application     │  ← Core / Hexagon
    │   ┌───────────┐   │
    │   │  Domain   │   │
    │   └───────────┘   │
    └───────────────────┘
          /   |   \\
   [Port][Port][Port]          ← Ports secundários (driven)
    /      |      \\
 [DB]  [Email]  [Queue]        ← Adapters secundários`)}
${quiz('Qual é o principal benefício da Regra de Dependência na Clean Architecture?',
['Torna o código mais rápido por eliminar camadas',
'O núcleo do sistema (Entities + Use Cases) pode ser testado sem banco de dados, sem HTTP, sem qualquer framework — apenas com objetos em memória',
'Permite usar qualquer linguagem de programação',
'Elimina a necessidade de testes de integração'],1,
'✅ Exatamente. Quando seu domínio não depende de Prisma, Express ou qualquer framework, você pode instanciar e testar suas regras de negócio com objetos simples em memória. Isso torna os testes unitários rápidos e confiáveis — e o sistema resiliente a mudanças de infra.')}
`},
{id:'cqrs-eventsourcing',title:'CQRS & Event Sourcing',level:'s',content:`
<h1>CQRS & Event Sourcing</h1>
<h2>CQRS — Command Query Responsibility Segregation</h2>
<div class="ph"><div class="pic">⚡</div><div class="pm">
<div class="pcat">Arquitetural · Greg Young</div>
<div class="pname">CQRS</div>
<div class="pint">Separa o modelo de leitura (Query) do modelo de escrita (Command) em modelos completamente distintos.</div>
</div></div>
${callout('💡','CQRS é a evolução arquitetural do princípio CQS. Enquanto CQS separa métodos, CQRS separa <strong>modelos inteiros</strong> — com bancos de dados, APIs e serviços distintos para reads e writes.','info')}
${diag(`
  Client
    │
    ├─── Command (write) ──► Command Handler ──► Write DB (normalizado)
    │                              │
    │                         Domain Events
    │                              │
    │                         Event Handler ──► Read DB (desnormalizado)
    │
    └─── Query (read) ──────────────────────────────► Read DB`)}
${code(`// Commands — intenção de mudar estado
interface Command { readonly type: string; }

interface CreateOrderCommand extends Command {
  type: 'CreateOrder';
  customerId: string;
  items: { productId: string; qty: number; price: number }[];
}

// Command Handler — escreve no Write DB, emite eventos
class CreateOrderHandler {
  async handle(cmd: CreateOrderCommand) {
    const order = Order.create(cmd.customerId, cmd.items);
    await this.writeRepo.save(order);
    await this.eventBus.publish(new OrderCreatedEvent(order)); // ← evento
  }
}

// Event Handler — atualiza Read DB com projeção otimizada para leitura
class OrderProjection {
  async on(event: OrderCreatedEvent) {
    await this.readDb.upsert('order_views', {
      id: event.orderId,
      customer_name: await this.customerCache.get(event.customerId),
      total: event.total,
      status: 'pending',
      created_at: event.occurredAt,
      items_count: event.items.length
    });
  }
}

// Query — leitura direta do Read DB (desnormalizado, otimizado)
class GetOrderQuery {
  async execute(orderId: string): Promise<OrderView> {
    return this.readDb.findOne('order_views', { id: orderId });
    // Sem joins, sem ORM, só SQL/NoSQL rápido
  }
}`,null,null)}
<h2>Event Sourcing</h2>
<div class="ph"><div class="pic">📜</div><div class="pm">
<div class="pcat">Arquitetural — frequentemente combinado com CQRS</div>
<div class="pname">Event Sourcing</div>
<div class="pint">Ao invés de armazenar o estado atual, armazena a sequência de eventos que levaram a esse estado.</div>
</div></div>
${callout('⚠️','Event Sourcing adiciona complexidade real. Use apenas quando você precisa de: audit log completo, time-travel debugging, ou reconstrução de estado em diferentes pontos no tempo.','danger')}
${code(`// Estado atual NÃO é armazenado — apenas eventos
type BankEvent =
  | { type: 'AccountOpened'; owner: string; initialBalance: number }
  | { type: 'MoneyDeposited'; amount: number }
  | { type: 'MoneyWithdrawn'; amount: number }
  | { type: 'AccountClosed'; reason: string };

// Estado é reconstruído aplicando eventos em sequência
function applyEvent(state: Account, event: BankEvent): Account {
  switch (event.type) {
    case 'AccountOpened':
      return { owner: event.owner, balance: event.initialBalance, closed: false };
    case 'MoneyDeposited':
      return { ...state, balance: state.balance + event.amount };
    case 'MoneyWithdrawn':
      if (state.balance < event.amount) throw new Error('Saldo insuficiente');
      return { ...state, balance: state.balance - event.amount };
    case 'AccountClosed':
      return { ...state, closed: true };
  }
}

// Reconstruir estado atual
const events: BankEvent[] = await eventStore.load('account-123');
const currentState = events.reduce(applyEvent, {} as Account);

// Time travel — estado em qualquer ponto no tempo
const stateLastMonth = events
  .filter(e => e.timestamp <= lastMonth)
  .reduce(applyEvent, {} as Account);`,null,null)}
${quiz('Qual é o maior desafio de Event Sourcing em produção?',
['Performance de escrita, pois gravar eventos é lento',
'Evolução do schema: quando a estrutura de um evento precisa mudar, você precisa de estratégias de upcasting/versioning porque eventos antigos já estão gravados e imutáveis',
'Event Sourcing não escala horizontalmente',
'Falta de suporte em bancos de dados modernos'],1,
'✅ Schema evolution é a dor real. Se MoneyWithdrawn muda para incluir um novo campo obrigatório, eventos antigos sem esse campo precisam ser migrados ou tratados com upcasting (converter formato antigo para novo em runtime). Isso exige cuidado e tooling especializado.')}
`},
{id:'mvc-layered',title:'MVC, MVP, MVVM & Layered',level:'i',content:`
<h1>MVC, MVP, MVVM e Arquitetura em Camadas</h1>
<h2>Arquitetura em Camadas (Layered/N-Tier)</h2>
<div class="pbox"><div class="pbox-name">Layered Architecture</div><div class="pbox-def">Organiza o sistema em camadas horizontais onde cada camada só pode se comunicar com a camada imediatamente abaixo.</div></div>
${diag(`  ┌─────────────────────────────┐
  │      Presentation Layer      │  ← UI, Controllers, REST
  ├─────────────────────────────┤
  │      Business Logic Layer    │  ← Services, Use Cases
  ├─────────────────────────────┤
  │      Data Access Layer       │  ← Repositories, ORM
  ├─────────────────────────────┤
  │      Database Layer          │  ← SQL, NoSQL, Cache
  └─────────────────────────────┘`)}
<h2>MVC — Model View Controller</h2>
<table><tr><th>Camada</th><th>Responsabilidade</th></tr>
<tr><td><strong>Model</strong></td><td>Dados e regras de negócio. Não sabe da View.</td></tr>
<tr><td><strong>View</strong></td><td>Exibição. Observa o Model, não contém lógica.</td></tr>
<tr><td><strong>Controller</strong></td><td>Recebe input, atualiza Model, seleciona View.</td></tr>
</table>
<h2>MVP — Model View Presenter</h2>
<p>Evolução do MVC para UIs mais complexas. O Presenter é um intermediário que contém toda a lógica de apresentação — a View é "burra" e apenas delega ao Presenter. Mais testável que MVC.</p>
<h2>MVVM — Model View ViewModel</h2>
<p>Usado em frameworks reativos (React, Angular, Vue). O ViewModel expõe streams/observables de dados que a View consome via data binding. A View reage automaticamente a mudanças de estado.</p>
<table><tr><th>Padrão</th><th>Contexto típico</th><th>Testabilidade</th></tr>
<tr><td>MVC</td><td>Servidores web, Rails, Laravel, ASP.NET</td><td>Média — Controller difícil de isolar</td></tr>
<tr><td>MVP</td><td>Android (legado), desktop apps</td><td>Alta — Presenter é POJO testável</td></tr>
<tr><td>MVVM</td><td>React, Angular, Vue, WPF, iOS SwiftUI</td><td>Alta — ViewModel sem dependência de UI</td></tr>
</table>
${quiz('Por que MVVM é popular em SPAs (React, Vue, Angular)?',
['Porque é o padrão mais moderno e substitui todos os outros',
'Porque data binding reativo sincroniza automaticamente UI e ViewModel — sem necessidade de código imperativo para atualizar a View quando o dado muda',
'Porque elimina a necessidade de um servidor',
'Porque é mais fácil de aprender que MVC'],1,
'✅ Em MVVM com frameworks reativos, quando o estado (ViewModel) muda, a UI é atualizada automaticamente. Você descreve "como a UI parece dado o estado" — não "como atualizar a UI". Isso elimina bugs de sincronização e simplifica o código.')}
`}
]},

{id:'systemdesign',title:'System Design',emoji:'⚡',color:'#34D399',level:'s',
 sections:[
  {id:'escalabilidade',title:'Escalabilidade e CAP',level:'s',content:`
<div class="ph"><div class="pic">📈</div><div class="pm">
<div class="pcat">System Design</div>
<div class="pname">Escalabilidade</div>
<div class="pint">Capacidade de um sistema de crescer (usuários, dados, tráfego) sem degradação de performance.</div>
</div></div>
<h2>Vertical vs Horizontal Scaling</h2>
<div class="card-row">
  <div class="card card-info"><div class="card-hd">⬆️ Vertical (Scale Up)</div><p>Adiciona mais CPU/RAM à mesma máquina. Simples, mas tem limite físico. Causa downtime para upgrade. Sem mudança de arquitetura.</p></div>
  <div class="card card-good"><div class="card-hd">➡️ Horizontal (Scale Out)</div><p>Adiciona mais máquinas. Sem limite teórico. Requer stateless design e load balancer. Base para cloud-native.</p></div>
</div>
<h2>Load Balancing</h2>
<table><tr><th>Algoritmo</th><th>Como funciona</th><th>Quando usar</th></tr>
<tr><td>Round Robin</td><td>Distribui sequencialmente entre servidores</td><td>Requests homogêneos, servidores iguais</td></tr>
<tr><td>Least Connections</td><td>Manda para o servidor com menos conexões ativas</td><td>Requests com duração variável</td></tr>
<tr><td>IP Hash</td><td>Mesmo client vai sempre para o mesmo servidor</td><td>Sessões stateful (quando DI não é possível)</td></tr>
<tr><td>Weighted</td><td>Servidores mais potentes recebem mais tráfego</td><td>Hardware heterogêneo</td></tr>
</table>
<h2>CAP Theorem</h2>
${diag(`         Consistency (C)
              /\\
             /  \\
            /    \\
           / CA   \\  ← Só possível sem partições
          /--------\\
         /    CP    \\  CP = sacrifica Availability
        /     |     \\  AP = sacrifica Consistency
       / AP   |      \\
      └────────────────┘
  Availability (A)    Partition Tolerance (P)
                 ↑
       Em redes reais, P é inevitável
       → Você escolhe entre C e A`)}
<table><tr><th>Tipo</th><th>Sacrifica</th><th>Exemplos</th></tr>
<tr><td>CP</td><td>Disponibilidade sob partição</td><td>MongoDB (modo w:majority), HBase, Zookeeper</td></tr>
<tr><td>AP</td><td>Consistência forte</td><td>Cassandra, DynamoDB, CouchDB</td></tr>
<tr><td>CA</td><td>Tolerância a partições</td><td>RDBMS single-node (MySQL, Postgres sem replicação)</td></tr>
</table>
<h2>Estratégias de Caching</h2>
<table><tr><th>Padrão</th><th>Quando usar</th></tr>
<tr><td>Cache-Aside (Lazy)</td><td>App checa cache → miss → carrega do DB → guarda no cache. Mais comum.</td></tr>
<tr><td>Write-Through</td><td>Toda escrita vai ao cache E ao DB. Cache sempre atualizado. Write mais lento.</td></tr>
<tr><td>Write-Behind</td><td>Escrita no cache primeiro; DB atualizado assincronamente. Performance máxima, risco de perda.</td></tr>
<tr><td>Read-Through</td><td>Cache carrega automaticamente do DB quando há miss. Transparente para o app.</td></tr>
</table>
${callout('⚠️','Os dois problemas clássicos de cache: <strong>Cache Stampede</strong> (muitos requests simultâneos num miss) e <strong>Cache Invalidation</strong> ("There are only two hard things in Computer Science: cache invalidation and naming things" — Phil Karlton).','warning')}
${quiz('Um sistema de e-commerce usa Redis para cache de produtos. Quando um produto tem o preço atualizado, qual é a estratégia mais segura?',
['Invalidar (deletar) a entrada do cache — o próximo request vai ao banco e regenera o cache com o dado novo',
'Atualizar diretamente no Redis com o novo preço',
'Esperar o TTL expirar naturalmente',
'Reiniciar o Redis para limpar tudo'],0,
'✅ Invalidar é mais seguro que atualizar. Atualizar o cache diretamente cria uma race condition: se dois processos atualizarem ao mesmo tempo, qual prevalece? Ao invalidar, você garante que o próximo request vai ao source of truth (banco) e regenera o cache de forma consistente.')}
`},
{id:'databases',title:'Bancos de Dados',level:'s',content:`
<h1>Bancos de Dados — Decisões Arquiteturais</h1>
<h2>SQL vs NoSQL</h2>
<table><tr><th>Critério</th><th>SQL (PostgreSQL, MySQL)</th><th>NoSQL</th></tr>
<tr><td>Modelo de dados</td><td>Tabelas relacionais, schema rígido</td><td>Documentos, key-value, grafo, coluna</td></tr>
<tr><td>ACID</td><td>✅ Garantido por padrão</td><td>⚠️ Varia (Mongo tem transactions, Dynamo tem eventual)</td></tr>
<tr><td>Escalabilidade</td><td>Vertical principalmente; sharding complexo</td><td>Horizontal nativo (Cassandra, Dynamo)</td></tr>
<tr><td>Queries complexas</td><td>✅ JOINs, aggregations, full-text</td><td>⚠️ Limitado; queries simples são mais rápidas</td></tr>
<tr><td>Schema flexibility</td><td>Schema migrations obrigatórias</td><td>Schema-less ou schema flexível</td></tr>
</table>
<h2>Sharding</h2>
<p>Distribuição horizontal de dados entre múltiplos nós. Cada shard contém um subconjunto dos dados.</p>
<div class="card-row">
  <div class="card card-info"><div class="card-hd">Hash Sharding</div><p>Distribui por hash de uma chave (ex: user_id % N). Distribuição uniforme, mas range queries são custosas.</p></div>
  <div class="card card-info"><div class="card-hd">Range Sharding</div><p>Particiona por intervalos (ex: A-M no shard 1, N-Z no shard 2). Range queries eficientes, hot spots possíveis.</p></div>
</div>
<h2>Replicação</h2>
<p><strong>Primary-Replica (Master-Slave):</strong> Todas as escritas vão ao Primary. Replicas sincronizam assincronamente e atendem leituras. Latência de replicação cria janela de inconsistência.</p>
<p><strong>Multi-Primary (Multi-Master):</strong> Qualquer nó aceita escritas. Resolução de conflitos obrigatória. Usado em sistemas geo-distribuídos.</p>
<h2>Indexing</h2>
${callout('💡','Índices aceleram leituras mas custam escritas e espaço. Todo INSERT/UPDATE precisa atualizar os índices relevantes. Nunca crie índices "preventivamente" — crie baseado em queries reais (EXPLAIN ANALYZE).','info')}
<table><tr><th>Tipo</th><th>Uso</th><th>Custo</th></tr>
<tr><td>B-Tree (padrão)</td><td>Equality e range queries</td><td>O(log n)</td></tr>
<tr><td>Hash</td><td>Apenas equality (=)</td><td>O(1) mas sem range</td></tr>
<tr><td>GIN</td><td>Arrays, JSONB, full-text (PostgreSQL)</td><td>Alto custo de escrita</td></tr>
<tr><td>Composite</td><td>Queries com múltiplas colunas (ordem importa)</td><td>Selectividade combinada</td></tr>
</table>
${quiz('Você tem uma query SELECT * FROM orders WHERE status = pending AND created_at > yesterday. Qual índice seria mais eficiente?',
['Índice em status separado + índice em created_at separado',
'Índice composto em (status, created_at) — pelo seletivo primeiro',
'Índice em created_at apenas — pois reduz mais o conjunto',
'Nenhum índice — table scan é suficiente para poucos dados'],1,
'✅ Índice composto em (status, created_at) é o ideal. O PostgreSQL pode usar o prefixo do índice (status) para filtrar rapidamente e depois aplicar o range em created_at. Índices separados exigem bitmap AND — menos eficiente.')}
`}
]},

{id:'ddd',title:'DDD — Domain-Driven Design',emoji:'🎯',color:'#F87171',level:'s',
 sections:[
  {id:'ddd-core',title:'Conceitos Core do DDD',level:'s',content:`
<div class="ph"><div class="pic">🎯</div><div class="pm">
<div class="pcat">Domain-Driven Design — Eric Evans, 2003</div>
<div class="pname">Domain-Driven Design</div>
<div class="pint">Abordagem ao desenvolvimento de software que prioriza o domínio de negócio e coloca a lógica do domínio no centro do design.</div>
</div></div>
${callout('💡','DDD não é sobre padrões técnicos — é sobre <strong>colaboração entre especialistas do domínio e desenvolvedores</strong> para criar software que realmente reflete o negócio.','info')}
<h2>Linguagem Ubíqua (Ubiquitous Language)</h2>
<p>A fundação do DDD. Uma linguagem comum, compartilhada por desenvolvedores e domain experts, usada no código, nos documentos, nas reuniões. Sem tradução entre "o que o negócio diz" e "o que o código diz".</p>
${badgood('O dev usa "user" no código, o negócio fala "cliente", o suporte fala "conta". Cada conversa requer tradução mental → bugs de comunicação.',
'Todos usam "Cliente", "Pedido", "Fatura" — no código, nos testes, nas reuniões. O código lê como o negócio pensa.')}
<h2>Entities vs Value Objects</h2>
${code(`// Entity — tem identidade única e mutável ao longo do tempo
class Order {
  constructor(
    readonly id: OrderId, // identidade — o que o torna único
    private customerId: CustomerId,
    private items: OrderItem[] = []
  ) {}

  addItem(product: Product, qty: number) {
    // regras de negócio aqui
    if (qty <= 0) throw new OrderError('Quantidade deve ser positiva');
    this.items.push(new OrderItem(product, qty));
  }
  // Dois pedidos com mesmo id são o mesmo pedido — mesmo que tenham itens diferentes
}

// Value Object — sem identidade; definido pelos seus atributos; imutável
class Money {
  constructor(
    readonly amount: number,
    readonly currency: 'BRL' | 'USD' | 'EUR'
  ) {
    if (amount < 0) throw new Error('Valor não pode ser negativo');
    Object.freeze(this); // garante imutabilidade
  }

  add(other: Money): Money {
    if (this.currency !== other.currency) throw new Error('Moedas diferentes');
    return new Money(this.amount + other.amount, this.currency); // novo objeto
  }

  equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }
  // Dois Money(100, 'BRL') são iguais — sem distinção de identidade
}`,
`from dataclasses import dataclass
from typing import Literal

@dataclass(frozen=True)  # imutável — Value Object
class Money:
    amount: float
    currency: Literal['BRL', 'USD']

    def __post_init__(self):
        if self.amount < 0:
            raise ValueError('Valor negativo')

    def add(self, other: 'Money') -> 'Money':
        if self.currency != other.currency:
            raise ValueError('Moedas diferentes')
        return Money(self.amount + other.amount, self.currency)`,null)}
<h2>Aggregates & Aggregate Root</h2>
<p>Um <strong>Aggregate</strong> é um cluster de objetos de domínio tratados como uma unidade para fins de mudança de dados. O <strong>Aggregate Root</strong> é a única entidade acessível externamente — toda interação com o aggregate passa por ela.</p>
${diag(`  ┌─────────────────────────────────────────┐
  │  Order (Aggregate Root)                  │
  │  ├── OrderId                            │
  │  ├── CustomerId                         │
  │  ├── List<OrderItem>  ← só Order acessa │
  │  │   ├── Product                        │
  │  │   ├── Quantity                       │
  │  │   └── Price (Money)                  │
  │  └── Address (Value Object)             │
  └─────────────────────────────────────────┘
  Regra: acesso externo APENAS via Order
  Regras de consistência do aggregate ficam DENTRO do Root`)}
${quiz('Por que o Aggregate Root é o único ponto de entrada para o aggregate?',
['Por limitação técnica dos bancos de dados',
'Para garantir invariantes do negócio — o Root controla todas as mutações e pode validar consistência global do aggregate. Se qualquer parte pudesse ser modificada externamente, a consistência não seria garantida',
'Para simplificar a API pública do sistema',
'Para melhorar performance de acesso'],1,
'✅ O Aggregate Root é o guardião da consistência. Quando você adiciona um OrderItem diretamente sem passar pela Order, você pula as validações: "pedido não pode ter mais de 100 itens", "total não pode exceder limite de crédito". O Root garante que essas regras sempre são respeitadas.')}
`},
{id:'bounded-contexts',title:'Bounded Contexts & Context Maps',level:'s',content:`
<h1>Bounded Contexts & Context Maps</h1>
<h2>Bounded Context</h2>
<div class="pbox"><div class="pbox-name">Bounded Context</div><div class="pbox-def">Um limite explícito dentro do qual um modelo de domínio particular é definido e aplicável. O mesmo termo pode ter significados diferentes em contexts diferentes.</div></div>
<p>O mesmo conceito "Cliente" pode ter significados completamente diferentes:</p>
<table><tr><th>Bounded Context</th><th>O que "Cliente" significa</th></tr>
<tr><td>Vendas</td><td>Nome, empresa, histórico de compras, potencial de venda</td></tr>
<tr><td>Suporte</td><td>Tickets abertos, SLA, contatos, incidentes</td></tr>
<tr><td>Financeiro</td><td>CNPJ, dados bancários, limite de crédito, inadimplência</td></tr>
<tr><td>Logística</td><td>Endereços de entrega, janelas de recebimento, restrições</td></tr>
</table>
<p>Cada context tem seu próprio modelo, seu próprio banco de dados (idealmente), seu próprio time.</p>
<h2>Context Maps — Relações entre Contexts</h2>
${diag(`  Shared Kernel (SK):
  ┌──────────┐    ┌──────────┐
  │ Billing  │----│  Sales   │  Compartilham subconjunto do modelo
  └──────────┘    └──────────┘  Ex: tipo de moeda, entidade Product

  Customer-Supplier (C/S):
  ┌──────────┐ upstream  ┌──────────┐
  │  Sales   │──────────►│ Shipping │  Shipping depende de Sales
  └──────────┘           └──────────┘  Sales define o contrato

  Anti-Corruption Layer (ACL):
  ┌──────────┐   [ACL]   ┌──────────┐
  │  Core    │◄─────────│Legacy ERP│  ACL traduz modelo legado
  └──────────┘           └──────────┘  Core não é "corrompido"

  Open Host Service (OHS):
  ┌──────────┐ REST API  ┌──────────┐
  │  Product │──────────►│  Others  │  Protocolo publicado e estável
  └──────────┘           └──────────┘`)}
<h2>Domain Events</h2>
<p>Eventos que representam algo significativo que aconteceu no domínio. São imutáveis, no passado, e podem cruzar Bounded Contexts.</p>
${code(`// Domain Event — algo que aconteceu no domínio
interface DomainEvent {
  readonly occurredOn: Date;
  readonly aggregateId: string;
}

class OrderShipped implements DomainEvent {
  constructor(
    readonly occurredOn: Date,
    readonly aggregateId: string, // orderId
    readonly customerId: string,
    readonly trackingCode: string,
    readonly estimatedDelivery: Date
  ) {}
}

// Aggregate Root emite eventos
class Order {
  private _events: DomainEvent[] = [];

  ship(trackingCode: string) {
    if (this.status !== 'processing') throw new Error('Pedido não está em processamento');
    this.status = 'shipped';
    this._events.push(new OrderShipped(
      new Date(),
      this.id,
      this.customerId,
      trackingCode,
      new Date(Date.now() + 5 * 86400000) // +5 dias
    ));
  }

  get events() { return [...this._events]; }
  clearEvents() { this._events = []; }
}

// Outros BCs reagem aos eventos (via event bus)
// Notification BC → envia email ao cliente
// Analytics BC → atualiza métricas de fulfillment
// Billing BC → marca pedido como faturado`,null,null)}
${quiz('Por que usar Anti-Corruption Layer ao integrar com sistemas legados?',
['Para melhorar a performance da integração',
'Para evitar que os conceitos ruins, naming inconsistente e modelo anêmico do sistema legado "vazem" para o core domain moderno — ACL traduz entre os dois mundos',
'Por obrigação técnica dos contratos de API',
'Para poder usar GraphQL em vez de REST'],1,
'✅ Sistemas legados frequentemente têm modelos de dados ruins, naming inconsistente e estruturas que não fazem sentido no domínio atual. Sem ACL, você começa a adaptando seu modelo para se encaixar no legado — "corrupção" do modelo. ACL é o isolamento que permite você evoluir o core domain independentemente.')}
`}
]},

{id:'microservices',title:'Microservices',emoji:'🔗',color:'#818CF8',level:'s',
 sections:[
  {id:'ms-decomposition',title:'Decomposição & Comunicação',level:'s',content:`
<div class="ph"><div class="pic">🔗</div><div class="pm">
<div class="pcat">Arquitetura de Microservices</div>
<div class="pname">Decomposição e Comunicação</div>
<div class="pint">Estruturar um sistema como um conjunto de serviços pequenos, autônomos e deployáveis independentemente.</div>
</div></div>
${callout('⚠️','Martin Fowler: "Don\'t start with microservices — start with a modular monolith." Microservices resolvem problemas de escala organizacional e operacional. Para equipes pequenas, um monolito bem estruturado é melhor.','danger')}
<h2>Estratégias de Decomposição</h2>
<div class="card-row">
  <div class="card card-info"><div class="card-hd">Por Capacidade de Negócio</div><p>Cada serviço implementa uma capacidade de negócio: Orders Service, Payments Service, Inventory Service. Times são donos de capacidades.</p></div>
  <div class="card card-info"><div class="card-hd">Por Subdomínio DDD</div><p>Cada Bounded Context vira um microservice. Alinhamento perfeito com DDD. Garante que serviços têm limites semânticos claros.</p></div>
</div>
<h2>Comunicação</h2>
<table><tr><th>Estilo</th><th>Quando usar</th><th>Ferramentas</th></tr>
<tr><td><strong>Síncrona (REST)</strong></td><td>Resposta imediata necessária; leitura de dados</td><td>HTTP/REST, OpenAPI</td></tr>
<tr><td><strong>Síncrona (gRPC)</strong></td><td>Alta performance; comunicação interna; streaming</td><td>Protocol Buffers, gRPC</td></tr>
<tr><td><strong>Assíncrona (Mensageria)</strong></td><td>Eventos de domínio; fire-and-forget; alta carga</td><td>Kafka, RabbitMQ, SQS</td></tr>
</table>
${code(`// gRPC Service Definition (proto)
/*
service OrderService {
  rpc CreateOrder (CreateOrderRequest) returns (OrderResponse);
  rpc GetOrder (GetOrderRequest) returns (OrderResponse);
  rpc WatchOrderStatus (GetOrderRequest) returns (stream StatusUpdate);
}
*/

// Comunicação assíncrona com Kafka
class OrderCreatedPublisher {
  constructor(private kafka: KafkaProducer) {}

  async publish(order: Order) {
    await this.kafka.send({
      topic: 'order.created',
      messages: [{
        key: order.id,
        value: JSON.stringify({
          orderId: order.id,
          customerId: order.customerId,
          total: order.total,
          occurredAt: new Date().toISOString()
        })
      }]
    });
  }
}

// Consumer em outro serviço
class ShippingOrderConsumer {
  @KafkaConsumer('order.created')
  async handle(event: OrderCreatedEvent) {
    await this.shippingService.scheduleDelivery(event.orderId, event.customerId);
  }
}`,null,null)}
<h2>Circuit Breaker</h2>
<p>Previne chamadas em cascata quando um serviço está falhando. Assim como um disjuntor elétrico, "abre" quando detecta falhas consecutivas e "fecha" após período de recuperação.</p>
${diag(`  Estados do Circuit Breaker:

  CLOSED → chamadas normais → falhas < threshold
     ↓ (falhas >= threshold)
  OPEN → rejeita chamadas imediatamente (fail fast)
     ↓ (após timeout de reset)
  HALF-OPEN → permite uma chamada de teste
     ↓ sucesso           ↓ falha
  CLOSED (reset)    OPEN (mais tempo)`)}
${quiz('Qual o principal benefício do Circuit Breaker em microservices?',
['Reduz latência de rede por pular chamadas lentas',
'Evita cascata de falhas: se o Payment Service está falhando, o Circuit Breaker no Order Service falha rápido em vez de aguardar timeout e consumir threads/recursos, protegendo todo o sistema',
'Garante que todas as chamadas são bem-sucedidas',
'Substitui a necessidade de retry logic'],1,
'✅ Sem Circuit Breaker, threads do Order Service ficam bloqueadas esperando timeout do Payment Service. Com 100 threads bloqueadas, o Order Service fica sem resources para atender outros requests — cascata. Circuit Breaker quebra essa cascata retornando erro imediatamente.')}
`},
{id:'ms-patterns',title:'Saga & API Gateway',level:'s',content:`
<h1>Saga Pattern & API Gateway</h1>
<h2>Saga Pattern</h2>
<div class="pbox"><div class="pbox-name">Saga</div><div class="pbox-def">Gerencia transações distribuídas através de uma sequência de transações locais. Se uma falha, transações compensatórias desfazem as anteriores.</div></div>
<h2>Choreography vs Orchestration</h2>
${diag(`  CHOREOGRAPHY (Event-driven):
  Order ──(OrderCreated)──► Payment ──(PaymentDone)──► Inventory ──(Reserved)──► Shipping
         ◄─(PaymentFailed)──          ◄─(OutOfStock)──
  Services se comunicam via eventos. Sem coordenador central.
  Pros: baixo acoplamento. Cons: fluxo difícil de visualizar/debugar.

  ORCHESTRATION (Central coordinator):
  ┌────────────────────────────────────┐
  │         Order Saga Orchestrator    │
  └────────────────────────────────────┘
         │          │          │
    Payment       Inventory  Shipping
    Service       Service    Service
  Pros: fluxo claro, fácil de debugar. Cons: orquestrador vira SPOF.`)}
${code(`// Saga Orchestrator (simplificado)
class CreateOrderSaga {
  async execute(command: CreateOrderCommand) {
    const sagaId = uuid();

    try {
      // 1. Reservar inventário
      await this.inventoryClient.reserve(command.items, sagaId);

      // 2. Processar pagamento
      await this.paymentClient.charge(command.customerId, command.total, sagaId);

      // 3. Confirmar pedido
      await this.orderRepo.confirm(command.orderId);

    } catch (error) {
      // Compensating transactions — desfaz na ordem inversa
      await this.compensate(sagaId, error);
      throw error;
    }
  }

  private async compensate(sagaId: string, error: Error) {
    if (error instanceof PaymentError) {
      // Desfaz apenas a reserva de inventário
      await this.inventoryClient.releaseReservation(sagaId);
    }
    // Se Shipping falhou, desfaz pagamento E inventário
  }
}`,null,null)}
<h2>API Gateway</h2>
<p>Ponto de entrada único para todos os clientes externos. Responsabilidades: roteamento, autenticação, rate limiting, SSL termination, logging, transformação de protocolo.</p>
${diag(`  Mobile App ──┐
  Web SPA ─────┼──► [API Gateway] ──► Order Service   :3001
  IoT ─────────┘         │        ──► Payment Service :3002
                         │        ──► User Service    :3003
                Authentication        ──► Product Service :3004
                Rate Limiting
                SSL Termination
                Request Logging`)}
${quiz('Por que transações compensatórias no Saga são diferentes de ROLLBACK SQL?',
['São tecnicamente idênticas',
'ROLLBACK é atômico e instantâneo. Compensações Saga são novas transações de negócio que desfazem o efeito — podem falhar, levar tempo, e o sistema fica em estado inconsistente temporariamente (eventual consistency)',
'Saga é mais eficiente que SQL transactions',
'Compensações são desnecessárias se você usa 2-Phase Commit'],1,
'✅ ROLLBACK em SQL é uma operação atômica — ou acontece completamente ou não acontece. No Saga, a "compensação" é um cancelamento real: se você já cobrou o cartão e precisa cancelar, é um estorno — que pode falhar! O sistema precisa lidar com estados intermediários e garantir que a compensação eventualmente se complete (idempotência).')}
`}
]},
];

// ─── NAV STRUCTURE ─────────────────────────────────────────
const NAV_GROUPS = [
  { label: 'Trilha', modules: ['fundamentos','solid','principios'] },
  { label: 'Design Patterns', modules: ['criacionais','estruturais','comportamentais'] },
  { label: 'Arquitetura', modules: ['arquiteturais','systemdesign','apidesign','ddd','microservices','observability'] },
]
