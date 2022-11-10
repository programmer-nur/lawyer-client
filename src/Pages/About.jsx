import React from 'react';
import useTitle from './useTitle';

const About = () => {
	useTitle('about')
    return (
        <section className="bg-gray-800  text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
			<img src="https://i.ibb.co/ZJ3JDDK/lalyer.webp" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
				<h3 className="text-2xl text-orange-400 font-semibold sm:text-4xl group-hover:underline group-focus:underline">About Me</h3>
				
				<p>Advocate Nur Mohammad has more than 15 years of experience in the field of corporate and commercial litigation and in international commercial arbitration. He has conducted a number of institutional international commercial arbitrations in the Singapore International Arbitration Centre (SIAC), the Hong Kong International Arbitration Centre (HKIAC), under the ICC rules. He has also been engaged in an ad hoc arbitration under the UNCITRAL arbitration rules in the Permanent Court of Arbitration (PCA) in the Hague, the Netherlands.

Nur is an arbitration partner at a German boutique law firm HPL Plewka & Coll, having offices in Frankfurt, Dubai, London, Luxembourg, Vienna, Puerto Plata, and Dhaka. He is also the head of the chamber of attorneys at Legal and Management Consultancy, a law firm based in Dhaka. His field of expertise in Bangladesh encompasses writ matters in administrative, tax, VAT and customs area, labour law and other general issues of fundamental rights of citizens.

Nur has already earned a substantial reputation in company and admiralty jurisdiction as well. Apart from the corporate and commercial areas, he has handled many criminal cases which involved the question of interpretation of the law.

Nur has a master of laws (LLM) in international commercial arbitration from the Europa Institute under the University of Saarland, Germany, an institution co-sponsored by the European Union for developing professionals in international law related to trade and investment. He obtained his bachelor’s degree in law from the University of Dhaka. He has also obtained a master’s in business administration from the Institute of Business Administration (IBA), University of Dhaka.

Nur believes in diving deep into any matter at hand, to such an extent that his representation is said to be dogmatic. Being a firm believer in the rule of law, he believes that as a lawyer, it is his duty to uphold the rule of law, and ensure justice for his clients, especially the members of the working class of Bangladesh.</p>
			</div>
		
	
	</div>
</section>
    );
};

export default About;