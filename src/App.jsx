import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Heart, Coffee, Users, Target, Gift, ExternalLink, Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import logoImage from './assets/logo.jpg'
import './App.css'

function App() {
  const [copied, setCopied] = useState(false)
  const [progress, setProgress] = useState(0)
  
  const pixKey = "22981526104" // Chave PIX - Banco Inter
  const goalAmount = 11450
  const currentAmount = 0 // Valor atual arrecadado
  
  useEffect(() => {
    const progressPercentage = (currentAmount / goalAmount) * 100
    setProgress(progressPercentage)
  }, [currentAmount, goalAmount])

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="Logo Café, Pão & Ovo" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Café, Pão & Ovo</h1>
              <p className="text-sm text-gray-600">Captação Empoderada</p>
            </div>
          </div>
          <Button 
            onClick={() => document.getElementById('donate').scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Heart className="w-4 h-4 mr-2" />
            Apoiar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <img 
              src={logoImage} 
              alt="Logo Café, Pão & Ovo" 
              className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl object-cover"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Café, Pão & <span className="text-amber-500">Ovo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Campanha de apoio direto para moradia, continuidade escolar e reconstrução de base familiar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Badge className="bg-amber-100 text-amber-800 px-4 py-2 text-lg">
                <Coffee className="w-5 h-5 mr-2" />
                R$ 62 = 1 Café da Manhã Simbólico
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg">
                <Target className="w-5 h-5 mr-2" />
                Meta: R$ {goalAmount.toLocaleString('pt-BR')}
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Progresso da Campanha</h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-gray-800">
                  R$ {currentAmount.toLocaleString('pt-BR')}
                </span>
                <span className="text-lg text-gray-600">
                  de R$ {goalAmount.toLocaleString('pt-BR')}
                </span>
              </div>
              <Progress value={progress} className="h-4 mb-4" />
              <p className="text-gray-600">
                {progress.toFixed(1)}% da meta alcançada
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Por que estamos pedindo ajuda?
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Atualmente morando na região serrana de Macaé (Arraial do Sana), 
                  precisamos consolidar a permanência até o fim do ano letivo.
                </p>
                <p>
                  <strong className="text-amber-600">R$ 62</strong> é o valor simbólico de um café da 
                  manhã simples em nossa localidade: um pacote de 500g de café, 1 pão de forma 
                  e uma cartela de 20 ovos.
                </p>
                <p>
                  É também o valor que estamos pedindo para contribuir com a solidariedade 
                  para garantir estabilidade e dignidade nos próximos meses.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-amber-100 to-amber-200 border-amber-300">
                <CardHeader className="pb-3">
                  <Coffee className="w-8 h-8 text-amber-600 mb-2" />
                  <CardTitle className="text-lg">Café</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-amber-700">Pacote 500g</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300">
                <CardHeader className="pb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full mb-2 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">P</span>
                  </div>
                  <CardTitle className="text-lg">Pão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700">1 Pão de Forma</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-red-100 to-red-200 border-red-300 col-span-2">
                <CardHeader className="pb-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full mb-2 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">O</span>
                  </div>
                  <CardTitle className="text-lg">Ovos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-700">Cartela com 20 ovos</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                A campanha busca garantir
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Lar Estável</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Um lar estável para concluir o ano escolar com dignidade.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Continuidade Educacional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                       Continuidade da participação no programa científico estadual recém-iniciado 'mulheres na ciência', para jovens estudantes da rede pública. Iara é aluna acima da média com excelentes notas e rendimento escolar, além de cursar em paralelo programação fullstack (DevQuest+Dev em Dobro-online), onde segue se desenvolvendo muito bem. Soma tbm aos estudos em Inglês, Espanhol e Economia (na Marginal Revolution University, online). Todos os estudos complementares são de iniciativa empoderada dela mesma.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Projetos Regenerativos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Condições mínimas para manter atuação em projetos regenerativos 
                      e de impacto positivo de forma voluntária.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Para onde vai o valor arrecadado?
              </h2>
              <p className="text-xl text-gray-600">
                Nosso objetivo total é de <strong className="text-amber-600">R$ 11.450,00</strong>
              </p>
            </motion.div>
            
            <div className="grid gap-6">
              {[
                { item: "Frete da mudança (Barra de Guaratiba → Sana)", value: 1500 },
                { item: "Ida com carro particular", value: 350 },
                { item: "Aluguel + contas (julho a dezembro)", value: 8400 },
                { item: "Alimentação básica inicial (primeiro mês)", value: 1200 }
              ].map((expense, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <span className="text-lg text-gray-700">{expense.item}</span>
                        <span className="text-xl font-bold text-amber-600">
                          R$ {expense.value.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Retribuições para quem apoiar
              </h2>
              <p className="text-xl text-gray-600">
                Quem contribuir com qualquer valor, a partir de R$ 62, receberá:
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Acesso a Bot de IA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Acesso gratuito por 1 ano a um bot de IA personalizado, 
                      útil no cotidiano.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Agradecimento Público</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Agradecimento público no blog "Vivendo a Família 3.0".
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">NFT Simbólico</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      NFT simbólico de gratidão, único, emitido via blockchain.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Conheça nossos Agentes de IA
              </h2>
              <p className="text-xl text-gray-600">
                Ferramentas personalizadas para ajudar no seu dia a dia
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-800">Torquatus</CardTitle>
                    <CardDescription className="text-purple-600">
                      Assistente especializado em análise e estratégia
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      asChild 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      <a href="https://poe.com/Torquatus" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Acessar Torquatus
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-gradient-to-br from-green-100 to-green-200 border-green-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-800">SynapseCriativa</CardTitle>
                    <CardDescription className="text-green-600">
                      Potencialize sua criatividade e inovação
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      asChild 
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <a href="https://poe.com/SynapseCriativa" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Acessar SynapseCriativa
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-800">SAGEconcierge</CardTitle>
                    <CardDescription className="text-blue-600">
                      Seu assistente pessoal inteligente
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      asChild 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <a href="https://poe.com/SAGEconcierge" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Acessar SAGEconcierge
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 px-4 bg-gradient-to-r from-amber-500 to-red-500">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Faça sua contribuição agora
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Contribua com R$ 62 ou mais via PIX
            </p>
            
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Chave PIX</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="text-lg font-mono text-gray-800 break-all">
                    {pixKey}
                  </p>
                </div>
                <Button 
                  onClick={copyPixKey}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copiar Chave PIX
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Transparência, autonomia e coletivo
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                <strong>Esse não é um pedido de caridade.</strong>
              </p>
              <p className="text-lg mb-6">
                É uma convocação para rede solidária, de pessoa para pessoa, 
                com verdade, impacto e devolutiva.
              </p>
              <p className="text-lg mb-6">
                Cada café da manhã que você compartilha aqui alimenta muito mais que o corpo.
              </p>
              <p className="text-lg font-semibold text-amber-600">
                Ajuda a manter vivo um caminho justo, resiliente e regenerativo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Café, Pão & Ovo</h3>
              <p className="text-gray-300">
                Captação Empoderada de Recursos para um futuro mais justo e regenerativo.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Agentes de IA</h3>
              <div className="space-y-2">
                <a href="https://poe.com/Torquatus" className="block text-gray-300 hover:text-white transition-colors">
                  Torquatus
                </a>
                <a href="https://poe.com/SynapseCriativa" className="block text-gray-300 hover:text-white transition-colors">
                  SynapseCriativa
                </a>
                <a href="https://poe.com/SAGEconcierge" className="block text-gray-300 hover:text-white transition-colors">
                  SAGEconcierge
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-gray-300">
                PIX: {pixKey}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Café, Pão & Ovo - Captação Empoderada de Recursos
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

