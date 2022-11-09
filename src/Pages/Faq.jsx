import React from 'react';

const Faq = () => {
    return (
        <section className="bg-gray-800 mt-9 text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold text-orange-500 leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-bold text-red-600">What is Business Law ?</h3>
				<p className="mt-1 text-gray-400">Business law is a section of code that is involved in protecting liberties and rights, maintaining orders, resolving disputes, and establishing standards for the business concerns and their dealings with government agencies and individuals. Every state defines its own set of regulations and laws for business organizations. Similarly, it is also the responsibility of the business concerns to know the existing rules and regulations applicable to them.</p>
			</div>
			<div>
				<h3 className="font-bold text-red-600">What is Education Law? ?</h3>
				<p className="mt-1 text-gray-400">Education law is a set of rules and regulations that guide the workings of an education system. Many regions have detailed educational law systems, in order to create comprehensive educational policies for a specific nation. Education law may deal with the creation and funding of schools and school policy, teacher requirements, and the rights of students.</p>
			</div>
			<div>
				<h3 className="font-bold text-red-600">What is Family Law?</h3>
				<p className="mt-1 text-gray-400">Family law is a legal practice area that focuses on issues involving family relationships such as marriage, adoption, divorce, and child custody, among others. Attorneys practicing family law can represent clients in family court proceedings or in related negotiations. They can also draft important legal documents such as court petitions or property agreements.</p>
			</div>
			<div>
				<h3 className="font-bold text-red-600">What is Insurance Law?</h3>
				<p className="mt-1 text-gray-400">Insurance law is the collection of laws and regulations that relate to insurance. Insurance is a contract between two parties. It transfers the risk of loss to the other party to the contract in exchange for a fee called a premium. Insurance laws and regulations manage and control how insurance contracts are formed and enforced. Insurance laws manage the offering, buying, selling and claims processes for insurance in the United States. In the United States alone, insurance is a trillion dollar industry.

</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default Faq;