import {Wifi} from 'lucide-react';
import {Card, SectionHeading} from '../ui';
import { currency } from '../../lib/format';

export function HeroCard({ value = 0, label = "Pipline value "}) {
    return(
        <Card className='p-6' >
            <SectionHeading title='Pipline Goal' subtitle='Total deal value' to='/pipline'>
                <div className='brand-gradient relative mt-5 overflow-hidden rounded-2xl p-5 text-white shadow-[var(--shadow-soft)]'>
                    <div className=''>
                        <div>
                            <span>

                            </span>
                            <Wifi />
                        </div>
                    </div>
                </div>
            </SectionHeading>
        </Card>
    )
}