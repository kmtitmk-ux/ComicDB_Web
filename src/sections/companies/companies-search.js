import { useEffect, useState } from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';

export const CompaniesSearch = (props) => {
    const { changeGraphqlParam, word } = props;
    const [newWord, setNewWord] = useState('');
    const searchWord = (e) => {
        changeGraphqlParam(e.target.word.value);
        e.preventDefault();
    };
    useEffect(() => {
        setNewWord(word);
    }, [word]);
    return (
        <form onSubmit={searchWord}>
            <Card sx={{ p: 2 }}>
                <OutlinedInput
                    defaultValue=""
                    fullWidth
                    placeholder={'検索ワード'}
                    value={newWord}
                    name="word"
                    onChange={((e) => setNewWord(e.target.value))}
                    startAdornment={(
                        <InputAdornment
                            position="start"
                        >
                            <SvgIcon
                                color="action"
                                fontSize="small"
                            >
                                <MagnifyingGlassIcon />
                            </SvgIcon>
                        </InputAdornment>
                    )}
                    sx={{ maxWidth: 500 }}
                />
            </Card>
        </form>
    );
};
