import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

const userSchema = z.object({
      firstName: z.string().min(1, { message: "First name is required" }),
      lastName: z.string().min(1, { message: "Last name is required" }),
      email: z.string().email({ message: "Invalid email address" }),
    });

type UserFormValues = z.infer<typeof userSchema>;

export default function Contact()
{
	return (
		<>
			<article className="py-10">
			<h1 className="text-2xl uppercase font-black text-center">Fancy a craic?</h1>
			<p className="max-w-xl m-auto pb-2">Feel free to contact us via email on the form below.
			</p>
			<p className="max-w-xl m-auto pb-4">Alternatively, you can contact us at:
			</p>
			<ul className="max-w-xl m-auto pb-4 list-style-disc">
				<li>Email: &nbsp; 
					<a href="mailto:websmith@anvil-dev.site">websmith@anvil-dev.site</a>
				</li>
				<li>Phone: &nbsp;
					<a href="tel:27626404965">0626404965</a> &mdash; it works on <a href="https://wa.me/27626404965">WhatsApp</a> </li>
			</ul>
			</article>
			<form>
			<div className="flex flex-col justify-center align-center items-center w-full gap-4 px-10 pb-10">
				<label className="input w-full lg:w-2xl">
  					<span className="label">First Name</span>
  					<input type="text" placeholder="Basil" required />
				</label>
				<label className="input w-full lg:w-2xl">
  					<span className="label">Last Name</span>
  					<input type="text" placeholder="Fawlty" required />
				</label>
			<label className="input w-full lg:w-2xl"> 
  					<span className="label">Company</span>
  					<input type="text" placeholder="Fawlty Towers LTD" />
			</label>
			<label className="input w-full lg:w-2xl">
  					<span className="label">Email</span>
  					<input type="email" placeholder="ckwatt@fawltytowers.co.uk" required />
			</label>
			<label className="input w-full lg:w-2xl">
  					<span className="label">Website</span>
  					<input type="text" placeholder="https://fawltytowers.co.uk" />
			</label>
			<label className="input w-full lg:w-2xl">
  					<span className="label">Mobile</span>
  					<input type="tel" placeholder="+441803293637" required />
			</label>
			<label className="select w-full lg:w-2xl">
  				<span className="label">Service Request: </span>
  				<select required>
    					<option>Web Development</option>
    					<option>Application Development</option>
					<option>SEO and Performance Audit</option>
  				</select>
			</label>
			<fieldset className="fieldset">
  				<legend className="fieldset-legend">Your Message</legend>
  				<textarea className="textarea h-24 w-md lg:w-2xl" placeholder="Dont mention the war&hellip;"></textarea>
 
			</fieldset>
			<button className="btn btn-primary uppercase self-baseline lg:ml-74">Submit</button>
			</div>
			</form>
		</>
	);
};