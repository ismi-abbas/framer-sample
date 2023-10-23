import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import { Reveal } from './Reveal';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
	const [data, setData] = useState();

	useEffect(() => {
		const controller = new AbortController();

		const fethData = async () => {
			const data = await axios.get('https://reqres.in/api/users/2?delay=2', {
				signal: controller.signal,
			});

			setData(JSON.stringify(data));
		};

		fethData();

		setTimeout(() => {
			controller.abort();
		}, 1000);
	}, []);

	return (
		<>
			<Reveal>
				<h3>Data</h3>
				<p>{data}</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>

			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>
			<Reveal>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa aliquid incidunt dolorum! Neque
					facilis dolores quibusdam quae velit reiciendis ipsa, quis voluptas porro, perspiciatis quod a in asperiores
					maxime.
				</p>
			</Reveal>

			<img src={viteLogo} alt="viteLogo" />
		</>
	);
}

export default App;
