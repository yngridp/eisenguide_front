import React from 'react';
import '../styles/SecurityPolicy.css';
import NavSecurity from '../components/estaticos/navbar/NavSecurity';  
import Footer from '../components/estaticos/footer/Footer';  

const SecurityPolicy: React.FC = () => {
  return (
    <div className="security-policy-container">
      <NavSecurity />  
      <div style={{ height: '500px' }}></div>
      <div className="security-policy-content">
        <h1>Política de Segurança e Privacidade</h1>

        <section>
          <h2>Introdução</h2>
          <p>
            A privacidade dos nossos usuários é de extrema importância para nós. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais no nosso site de gestão de tarefas.
          </p>
        </section>

        <section>
          <h2>Coleta de Dados</h2>
          <p>
            Coletamos informações pessoais, como nome, email e informações de tarefas, quando você utiliza o nosso serviço. Essas informações são necessárias para fornecer a melhor experiência de usuário e personalizar o serviço.
          </p>
        </section>

        <section>
          <h2>Uso de Dados</h2>
          <p>
            Utilizamos os dados coletados para oferecer nossos serviços, melhorar a plataforma, comunicar atualizações e fornecer suporte. As informações fornecidas são usadas exclusivamente para a finalidade pretendida e de acordo com esta política de privacidade.
          </p>
        </section>

        <section>
          <h2>Compartilhamento de Dados</h2>
          <p>
            Não vendemos, trocamos ou transferimos informações pessoais para terceiros sem o seu consentimento, exceto quando exigido por lei ou para proteger nossos direitos legais.
          </p>
        </section>

        <section>
          <h2>Medidas de Segurança</h2>
          <p>
            Adotamos medidas rigorosas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia, firewalls, autenticação de múltiplos fatores e outros protocolos de segurança para garantir a segurança dos dados.
          </p>
        </section>

        <section>
          <h2>Direitos dos Usuários</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais armazenadas conosco. Caso queira exercer esses direitos, entre em contato através do email abaixo.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Utilizamos cookies para melhorar a sua experiência no site. Cookies são pequenos arquivos armazenados no seu dispositivo que nos ajudam a lembrar de suas preferências e entender como você interage com nosso site.
          </p>
        </section>

        <section>
          <h2>Contato</h2>
          <p>
            Caso tenha dúvidas sobre esta Política de Segurança e Privacidade, entre em contato conosco através do email: <a href="mailto:support@eisenguide.com">support@eisenguide.com</a>.
          </p>
        </section>
      </div>
      <Footer /> 
    </div>
  );
};

export default SecurityPolicy;
