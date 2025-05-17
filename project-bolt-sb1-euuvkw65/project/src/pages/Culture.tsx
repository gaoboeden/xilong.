import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Shield, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const Culture: React.FC = () => {
  useEffect(() => {
    document.title = '主题文化 - 锡龙酒店';
  }, []);

  const values = [
    {
      icon: <Heart className="w-10 h-10 text-primary-600" />,
      title: '尊重',
      description: '我们尊重每一位客人、员工和合作伙伴，以真诚的态度对待每一个人。'
    },
    {
      icon: <Target className="w-10 h-10 text-primary-600" />,
      title: '卓越',
      description: '我们追求卓越，不断提升服务质量，超越客人的期望。'
    },
    {
      icon: <Users className="w-10 h-10 text-primary-600" />,
      title: '团队',
      description: '我们相信团队的力量，协作共进，共同为客人创造美好体验。'
    },
    {
      icon: <Shield className="w-10 h-10 text-primary-600" />,
      title: '诚信',
      description: '我们恪守诚信原则，信守承诺，赢得客人的信任与尊重。'
    }
  ];

  const teamMembers = [
    {
      image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: '张伟',
      position: '总经理',
      description: '拥有20年酒店管理经验，带领锡龙酒店不断发展壮大，提升服务质量。'
    },
    {
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: '李娜',
      position: '客房部经理',
      description: '致力于提供最舒适的住宿体验，确保每一个细节都符合高标准要求。'
    },
    {
      image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: '王军',
      position: '餐饮部总监',
      description: '国际知名厨师，为客人打造独特的美食体验，融合中西方烹饪技巧。'
    },
    {
      image: 'https://images.pexels.com/photos/4559555/pexels-photo-4559555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: '刘芳',
      position: '市场营销总监',
      description: '打造锡龙酒店品牌形象，推动市场拓展，提升品牌知名度和美誉度。'
    }
  ];

  const culturalThemes = [
    {
      image: 'https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '丝路风情',
      description: '以古丝绸之路为灵感，融合东西方文化元素，呈现丰富多彩的文化交流历史。'
    },
    {
      image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '园林意境',
      description: '借鉴中国传统园林设计理念，营造自然与人文融合的雅致空间。'
    },
    {
      image: 'https://images.pexels.com/photos/6270170/pexels-photo-6270170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '茶艺文化',
      description: '传承中国茶文化精髓，为客人提供正宗的中国茶艺体验。'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/13781312/pexels-photo-13781312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              主题文化
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-200 mb-10 max-w-2xl"
            >
              了解锡龙酒店的文化理念、价值观和团队风貌，感受我们独特的服务文化和主题特色。
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/11961026/pexels-photo-11961026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="锡龙酒店文化" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">传承与创新</h3>
                  <p className="text-neutral-200">融合中华文化精髓，创新服务理念</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="我们的理念"
                title="愿景与使命"
                description="锡龙酒店秉持'以客为尊，追求卓越'的服务理念，致力于为每位宾客提供超越期望的尊贵体验。"
              />
              
              <div className="space-y-6 mb-8">
                <div className="card p-6 border-l-4 border-primary-600">
                  <h3 className="text-xl font-bold mb-2 text-neutral-800">我们的愿景</h3>
                  <p className="text-neutral-600">
                    成为行业领先的豪华酒店品牌，以卓越的服务和独特的文化体验著称，让每位宾客都能感受到家的温暖与尊贵。
                  </p>
                </div>
                
                <div className="card p-6 border-l-4 border-secondary-600">
                  <h3 className="text-xl font-bold mb-2 text-neutral-800">我们的使命</h3>
                  <p className="text-neutral-600">
                    通过提供个性化、专业化的服务，创造超越宾客期望的体验；同时关注员工发展，回馈社会，实现可持续发展。
                  </p>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                to="/about"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                了解更多
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="核心价值观"
            title="我们的价值理念"
            description="这些核心价值观指导着我们的日常运营和决策，是锡龙酒店文化的基石。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-800">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Cultural Themes */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="主题特色"
            title="独特的文化体验"
            description="锡龙酒店融合了多元文化元素，打造独特的主题体验，让宾客在入住期间感受丰富的文化魅力。"
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {culturalThemes.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={theme.image} 
                    alt={theme.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-neutral-800">{theme.title}</h3>
                  <p className="text-neutral-600 mb-6">{theme.description}</p>
                  <Button 
                    variant="outline" 
                    to="/about"
                    className="w-full"
                  >
                    了解更多
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl font-serif mb-6">"</div>
              <p className="text-xl md:text-2xl italic mb-8">
                我们不仅仅是提供住宿，我们致力于创造难忘的体验，让每一位宾客都能感受到锡龙酒店独特的文化魅力和贴心服务。
              </p>
              <p className="font-medium">
                张伟 — 锡龙酒店总经理
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="核心团队"
            title="我们的管理团队"
            description="锡龙酒店拥有一支经验丰富、专业敬业的管理团队，他们是酒店发展的中坚力量。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-neutral-800">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-neutral-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Cultural Activities */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="文化活动"
                title="体验中华文化魅力"
                description="锡龙酒店定期举办各种文化活动，让宾客在住宿期间深入体验中华传统文化的魅力。"
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary-600 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-neutral-800">茶艺表演</h3>
                    <p className="text-neutral-600">
                      由专业茶艺师进行现场茶艺表演，宾客可以品尝各种中国名茶，了解中国茶文化。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary-600 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-neutral-800">书法体验</h3>
                    <p className="text-neutral-600">
                      邀请书法大师指导宾客体验中国书法艺术，感受汉字的魅力。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary-600 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-neutral-800">中国传统音乐会</h3>
                    <p className="text-neutral-600">
                      定期举办中国传统音乐演奏会，让宾客欣赏古筝、二胡等传统乐器的优美旋律。
                    </p>
                  </div>
                </div>
              </div>
              
              <Button variant="primary" to="/contact">
                预约活动
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5580515/pexels-photo-5580515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="茶艺" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4050345/pexels-photo-4050345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="书法" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden col-span-2">
                  <img 
                    src="https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="中国传统乐器" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1769413/pexels-photo-1769413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="absolute inset-0 bg-secondary-900 bg-opacity-80"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              体验锡龙酒店独特的文化魅力
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg mb-8 text-neutral-300"
            >
              预订您的住宿，感受传统与现代完美融合的独特体验。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button 
                variant="primary" 
                to="/contact"
                className="bg-white text-secondary-900 hover:bg-neutral-100"
              >
                立即预订
              </Button>
              <Button 
                variant="outline" 
                to="/about"
                className="border-white text-white hover:bg-white hover:text-secondary-900"
              >
                了解更多
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Culture;